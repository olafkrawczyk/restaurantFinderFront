import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HelperRestService {

    backendURL = 'http://localhost:8080';

    constructor(private http: Http) { }

    getCities() {
        return this.http.get(this.backendURL + '/restaurantsCities');
    }

    getCuisines() {
        return this.http.get(this.backendURL + '/availableCuisines');
    }
}
