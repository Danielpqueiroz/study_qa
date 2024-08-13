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
        
        carga: {
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            stages: [
                {duration: '1m', target: 150},
                {duration: '2m', target: 280},
                {duration: '1m', target: 0},
                
            ]
        },

        concorrencia: {
            setupTimeout: '3000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '30s', target: 150},
                {duration: '2m', target: 270},
                {duration: '1m', target: 0},
            ]
        },

        escalabilidade: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 250},
                {duration: '2m', target: 300},
                {duration: '1m', target: 0},
            ]
        },

        estresse: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 150},
                {duration: '2m', target: 250},
                {duration: '1m', target: 0},
            ]
        },

        pico: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '15s', target: 500},
                {duration: '15s', target: 0},
                
            ]
        },

        resistencia: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '2m', target: 200},
                {duration: '8m', target: 250},
                {duration: '30s', target: 0},
            ]
        },

    }
}