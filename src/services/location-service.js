import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class LocationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        
        const baseUrl = 'http://localhost:8080/api/'

        httpClient.configure(config => {
            config.withBaseUrl(baseUrl);
        });
    }

    getLocations() {
        return this.httpClient.fetch('locations')
                .then(response => response.json());
    }
}
