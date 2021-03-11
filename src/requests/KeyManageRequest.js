// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import {doPostRequest, paginationToBackend} from "./BaseRequest";

/* Find all key in server pageable */
export function fetchAllKey(pagination) {
    const data = paginationToBackend(pagination)
    return doPostRequest("/key/manage/list/all", data)
}

/* Find all own key in server pageable */
export function fetchAllOwnKey(pagination) {
    const data = paginationToBackend(pagination)
    return doPostRequest("/key/manage/list/own", data)
}

/* Create a key with effective days */
export function createKey(days,totalTimes) {
    const data = {"effectiveDurationInDay": days,"totalTimes":totalTimes}
    return doPostRequest("/key/manage/create", data)
}

/* Disable a key */
export function disableKey(keyName) {
    const data = {"keyName": keyName}
    return doPostRequest("/key/manage/disable", data)
}

/* Disable own key */
export function disableOwnKey(keyName) {
    const data = {"keyName": keyName}
    return doPostRequest("/key/manage/disable/own", data)
}

/* Disable a key */
export function increaseKey(keyName, incCount) {
    const data = {"keyName": keyName,"incCount":incCount}
    return doPostRequest("/key/manage/increase", data)
}

/* Disable own key */
export function increaseOwnKey(keyName, incCount) {
    const data = {"keyName": keyName,"incCount":incCount}
    return doPostRequest("/key/manage/increase/own", data)
}
