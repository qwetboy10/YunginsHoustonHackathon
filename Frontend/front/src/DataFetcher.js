const djangoIP = 'http://192.168.1.203:8000/api/';

function logError(err) {
    console.log("There was an error when fetching! Exact error below:");
    console.log(err);
}

export function getEvents(loadData) {
    fetch(`${djangoIP}events/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
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

export function getPersonByID(id, loadData) {
    fetch(`${djangoIP}people/${id}/`).then(res => res.json()).then(res => {
        fetch(`${djangoIP}users/${res.user}/`).then(res2 => res2.json()).then(res2 =>
            loadData({...res, ...res2})
        );
    }).catch(logError);
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

export function searchEvents(name, additional = {}) {
    var url = `${djangoIP}/events?search=${encodeURI(name)}`;
    if(additional.before) url += `&&before=${unixTime(additional.before)}`;
    if(additional.after) url += `&&after=${unixTime(additional.after)}`;
    if(additional.tags) url += `&&tags=${additional.tags.join("&&tags=")}`;

}

export function searchEventsAdvanced() {
    
}