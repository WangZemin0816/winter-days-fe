// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import {doPostRequest} from "./BaseRequest";

/* Evaluate which nums summary is target */
export function evaluateSummary(headerUuids, targetSummary, maxErrorValue) {
    let data = {
        "headerUuids": headerUuids,
        "targetSummary": targetSummary,
        "maxErrorValue": maxErrorValue
    }
    return doPostRequest("/summary/evaluate", JSON.stringify(data))
}
