import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

export class LocationService {
    constructor() {
        this.httpClient = this.configuredClient()
        console.log('YAMECONFIGURE');
    }

    fetchLocations() {
        console.log('Fetching locations...');
        this.httpClient.fetch('http://localhost:8080/api/locations')
            .then(response => response.json())
            .then(data => {
                return console.log(data);
            }).catch(error => {
                console.log(error);
            });
    }

    configuredClient() {
        return new HttpClient().configure(config => {
            config.useStandardConfiguration()
                //.withBaseUrl('http://127.0.0.1:8080/api/')
                .withInterceptor({
                    request(request) {
                    console.log(`Requesting ${request.method} ${request.url}`);
                    return request;
                    },
                    response(response) {
                    console.log(`Received ${response.status} ${response.url}`);
                    return response;
                    }})
                .withDefaults({
                    //mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Access-Control-Allow-Credentials': 'true',
                        'X-Requested-With': 'Fetch'
                    }
                });

        });

    }
}