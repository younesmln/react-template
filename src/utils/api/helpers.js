import isoFetch from 'isomorphic-fetch';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    else {
        throw new HTTPError(response);
    }
}

export function fetch(url, {method = 'GET', body = {}, headers = {}} = {}){
    let baseUrl = 'http://localhost:4000';
    url = `${baseUrl}/${url}`;
    method = method.toLowerCase();
    let defaultBody = {};
    let defaultHeader = {
        'Content-Type' : 'application/json'
    };
    headers = Object.assign(defaultHeader, headers);
    body = Object.assign(defaultBody, body);
    let preFetch;
    if (method === 'get' || method === 'head') {
        preFetch = isoFetch(url, {method, headers})
    } else {
        preFetch = isoFetch(url, {method, headers, body: JSON.stringify(body)})
    }
    return preFetch.then(checkStatus).then(response => response.json());
}

export function HTTPError(response) {
    this.response = response;
}

/*export class HTTPError extends Error {
    constructor(response){
        super(`error when requesting ${response.url} with status code : ${response.status}`);
        this.name = 'HTTPError';
        this.response = response;
    }
}*/

export function takeFirstError(errors){
    return errors.map((v) => v[0]);
}