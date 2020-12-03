// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import {doGetRequest} from "./BaseRequest";

/* Convert frontend pagination to backend page request */
function paginationToBackend(pagination) {
    return {
        pageNo: pagination.current - 1,
        pageSize: pagination.pageSize
    }
}

/* Find all sheet in serve pageable */
export function fetchAllWorkbook(pagination, callback) {
    const data = paginationToBackend(pagination)
    return doGetRequest("/excel/get/workbooks", data, callback)
}

/* Find all sheet in a workbook pageable */
export function fetchSheetInWorkbook(workbookUuid, pagination) {
    let data = paginationToBackend(pagination)
    data.workbookUuid = workbookUuid;
    const json = doGetRequest("/excel/get/sheets", data)
    console.log("Fetch sheet for workbook[" + workbookUuid + "] from server success, fetch result:" + json)
    return json
}

/* Add json format information to the header */
export function fetchHeaderInSheet(sheetUuid, pagination) {
    let data = paginationToBackend(pagination)
    data.sheetUuid = sheetUuid;
    const json = doGetRequest("/excel/get/headers", data)
    console.log("Fetch header for sheet[" + sheetUuid + "]  server success, fetch result:" + json)
    return json
}