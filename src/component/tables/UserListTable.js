// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://49.234.76.148";
export const ACCESS_TOKEN = "accessToken";

/* Add auth information such as jwt token to the header */
function addAuthorToHeader(headers) {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', localStorage.getItem(ACCESS_TOKEN))
    }
    return headers
}

/* Add json format information to the header */
function addJsonContentTypeToHeader(headers) {
    headers.append('Content-Type', 'application/json')
    return headers
}

/* Add json format information to the header */
function createDefaultHeader() {
    let headers = new Headers({})
    headers = addAuthorToHeader(headers)
    headers = addJsonContentTypeToHeader(headers)
    return headers
}

/* Create an post method options */
function createPostOption(data) {
    const option = {headers: createDefaultHeader()}
    option.body = data
    option.method = "POST"
    return option
}

/* Create an get method options */
function createGetOption(data) {
    const option = {headers: createDefaultHeader()}
    option.method = "GET"
    return option
}

/* Concat the request real url */
function concatRequestUrl(relativeUrl) {
    return API_BASE_URL + relativeUrl
}

/* To concat a get request url with params dict. */
function concatGetUrl(relativeUrl, data) {
    let url = concatRequestUrl(relativeUrl)
    let prefix = "?"
    Object.keys(data).forEach(function (key) {
        url = url + prefix + key + "=" + data[key]
        prefix = "&"
    })
    return url
}

/* Fetch data by http post request */
export function doPostRequest(relativeUrl, data) {
    const url = concatRequestUrl(relativeUrl)
    const option = createPostOption(data)
    return fetch(url, option)
        .then(response =>
            response.json().then(json => {
               return json
            })
        );
}

/* Fetch data by http get request */
export function doGetRequest(relativeUrl, data) {
    const url = concatGetUrl(relativeUrl, data)
    const option = createGetOption(data)
    console.log("Begin to post " + url + " with options:" + JSON.stringify(option))
    return fetch(url, option)
        .then(response =>
            response.json().then(json => {
                return json
            })
        );
}

/* Convert frontend pagination to backend page request */
export function paginationToBackend(pagination) {
    return {
        pageNo: pagination.current,
        pageSize: pagination.pageSize
    }
}

