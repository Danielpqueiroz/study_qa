export const testConfig = {
    environment: {
        hml: {
            url: 'http://localhost:3000'
        },

        dev: {
            url: "http://localhost:3333"
        }
    },
    options: {
        smokeThresholds: {
            executor: 'constant-vus',
            vus: 20,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },

        carga: {
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '5s', target: 10},
                {duration: '0s', target: 10},
            ]
        },

        concorrencia: {
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '30s', target: 10},
                {duration: '30s', target: 10},
            ]
        },

        escalabilidade: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '30s', target: 10},
                {duration: '30s', target: 10},
            ]
        },

        estresse: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '30s', target: 10},
                {duration: '30s', target: 10},
            ]
        },

        pico: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '30s', target: 10},
                {duration: '30s', target: 10},
            ]
        },

        resistencia: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '30s', target: 10},
                {duration: '30s', target: 10},
            ]
        },

    }
}