const djangoIP = 'http://localhost:8000/api/';

function logError(err) {
    console.log("There was an error when fetching! Exact error below:");
    console.log(err);
}

export function getEvents(loadData) {
    fetch(`${djangoIP}event/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}

export function getOrganizations(loadData) {
    fetch(`${djangoIP}organization/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}

export function getSkills(loadData) {
    fetch(`${djangoIP}skill/`).then(res => res.json()).then(res => {
        loadData(res);
    }).catch(logError);
}
