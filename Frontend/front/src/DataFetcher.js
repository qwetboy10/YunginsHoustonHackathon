const djangoIP = 'http://192.168.1.203:8000/api/';

function logError(err) {
    console.log("There was an error when fetching! Exact error below:");
    console.log(err);
}

export function getEvents(url, loadData) {
    fetch(`${djangoIP}events/${url}`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}

export function getEventsByUsername(username, loadData) {
    getPersonByUsername(username, (data) => {
        fetch(`${djangoIP}people/${data.id}/events`).then(res => res.json()).then(loadData)
    }, () => console.log("Error occured"));
}

export function getEventByID(id, loadData) {
    fetch(`${djangoIP}events/${id}/`).then(res => res.json()).then(res =>
        loadData(res)
    );
}

export function getOrganizations(loadData) {
    fetch(`${djangoIP}organizations/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}

export function getSkills(loadData) {
    fetch(`${djangoIP}skills/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}

function getUserByID(id, loadData) {
    fetch(`${djangoIP}users/${id}/`).then(res2 => res2.json()).then(res2 =>
        loadData(res2)
    );
}
export function getPersonByID(id, loadData) {
    fetch(`${djangoIP}people/${id}/`).then(res => res.json()).then(res => {
        if(res.details) logError(res.details);
        else getUserByID(res.user, (data) => loadData({...data, ...res}));
    }).catch(logError);
}
export function getPersonByUsername(username, loadData, failed) {
    fetch(`${djangoIP}people/get_person_by_username/?username=${username}`).then(res => {
        if(res.ok) 
            res.json().then(res => {
                if(res.details) logError(res.details);
                else getUserByID(res.user, (data) => loadData({...data, ...res}));
        });
        else failed();
    }).catch((err) => {
        logError(err);
        failed();
    });
}

export function getPersonByEventID(eventID, addPerson) {
    fetch(`${djangoIP}events/${eventID}/get_volunteers`).then(res => res.json()).then(res => 
        res.map(person => {
            getUserByID(person.user, (data) => addPerson({...data, ...person}));
        })
    );
}

export function authenticateUser(username, password, success, failure) {
    fetch(`${djangoIP}users/login/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(res => res.json()).then(res => {
        if(res.id) success(res);
        else failure();
    });
}

export function createUser(username, password, firstName, lastName, email, phoneNum, success) {
    fetch(`${djangoIP}users/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({username, password, first_name: firstName, last_name:lastName, email})
    }).then(res => res.json()).then(res => {
        if(res.detail) logError(res.detail);
        else fetch(`${djangoIP}people/`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({user: res.id, phone: phoneNum})
        }).then(res2 => res2.json()).then(res2 => {
            if(res2.details) logError(res2.detail);
            else success(res2);
        });
    })
}

function unixTime(date) {

}

export function searchEvents(name, history, additional = {}) {
    var url = `?search=${encodeURI(name)}`;
    if(additional.before) url += `&before=${unixTime(additional.before)}`;
    if(additional.after) url += `&after=${unixTime(additional.after)}`;
    if(additional.tags) url += `&tags=${additional.tags.join("&tags=")}`;

    if(additional.user) url += `&user=${additional.user}`;
    history.push(`events/${url}`);
}
