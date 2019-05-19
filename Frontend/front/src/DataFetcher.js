const djangoIP = 'http://localhost:8000/api/';

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
        loadData(res);
    }).catch(logError);
}

export function authenticateUser(username, password, success, failure) {
    fetch(`${djangoIP}users/login/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if(res.ok) res.json().then(data => success(data));
        else failure();
    });
}