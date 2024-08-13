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
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            stages: [
                {duration: '1m', target: 150},
                {duration: '2m', target: 230},
                {duration: '1m', target: 0},
                
            ]
        },

        concorrencia: {
            setupTimeout: '3000s',
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '30s', target: 100},
                {duration: '2m', target: 150},
                {duration: '1m', target: 0},
            ]
        },

        escalabilidade: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 200},
                {duration: '2m', target: 250},
                {duration: '1m', target: 0},
            ]
        },

        estresse: {
            setupTimeout: '4000s',
            teardownTimeout: '4000s',
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
            setupTimeout: '4000s',
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '30s', target: 150},
                {duration: '5s', target: 0},
                
            ]
        },

        resistencia: {
            
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
        cargaFlow: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            stages: [
                {duration: '1m', target: 150},
                {duration: '2m', target: 240},
                {duration: '1m', target: 0},
                
            ]
        },

        concorrenciaFlow: {
            setupTimeout: '4000s',
            setupTimeout: '3000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '30s', target: 150},
                {duration: '2m', target: 220},
                {duration: '1m', target: 0},
            ]
        },

        escalabilidadeFlow: {
            setupTimeout: '4000s',
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

        estresseFlow: {
            setupTimeout: '4000s',
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 150},
                {duration: '2m', target: 230},
                {duration: '1m', target: 0},
            ]
        },

        picoFlow: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '15s', target: 300},
                {duration: '15s', target: 0},
                
            ]
        },

        resistenciaFlow: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '2m', target: 200},
                {duration: '8m', target: 220},
                {duration: '30s', target: 0},
            ]
        },


    }
}