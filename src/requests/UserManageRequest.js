// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import {doPostRequest} from "./BaseRequest";
import {paginationToBackend} from "./BaseRequest";

/* Find all user in server pageable */
export function fetchAllUser(pagination) {
    const data = paginationToBackend(pagination)
    return doPostRequest("/user/manage/query/user", data)
}


/* Create an admin user */
export function createAdminUser(username, password) {
    const data = {"username": username, "password": password}
    return doPostRequest("/user/manage/create/admin", data)
}

/* Create an agent user */
export function createAgentUser(username, password) {
    const data = {"username": username, "password": password}
    return doPostRequest("/user/manage/create/agent", data)
}

/* Disable an user */
export function disableUser(username) {
    console.log("Disable user with name:" + username)
    const data = {"username": username}
    return doPostRequest("/user/manage/disable/user", data)
}
