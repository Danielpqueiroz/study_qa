import { check } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check( response, {
            "status code check": (r) => r.status === expectedStatus, 
        })
    }
    
    checkResponseSize(response, maxSize) {
        check(response, {
            "response size check": (r) => r.body.length <= maxSize,
        });
    }

    checkResponseTime(response, maxTime) {
        check(response, {
            "response time check": (r) => r.timings.duration <= maxTime,
        });
    }
}