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

        smoke: {
            vus: 3,
            duration: '3s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            // stages: [
            //     {duration: '1m', target: 150},
            //     {duration: '2m', target: 280},
            //     {duration: '1m', target: 0},
                
            // ]
        },
        
        carga: {
            setupTimeout: '4000s',
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
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '30s', target: 100},
                {duration: '2m', target: 270},
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
                {duration: '2m', target: 300},
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
                {duration: '2m', target: 300},
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
                {duration: '30s', target: 400},
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
        
    }
}