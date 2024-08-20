import { check, fail } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        if (
        !check( response, {
            "Verificação de que o status code correto": (r) => r.status === expectedStatus, 
        })){
            fail (response.body)
        }
    }
    
    checkResponseSize(response, maxSize) {
        check(response, {
            "Verificação do tamanho da resposta": (r) => r.body.length <= maxSize,
        });
    }

    checkResponseTime(response, maxTime) {
        check(response, {
            "Verificação do tempo de resposta": (r) => r.timings.duration <= maxTime,
        });
    }

    checkResponseNotEmpty(response) {
        check(response, {
            'Verificação de que a resposta não está vazia': (r) => r.body.length > 0
        });
    }
}