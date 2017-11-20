import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseURL } from '../app.component';

@Injectable()
export class HelperRestService {

    backendURL = baseURL;

    constructor(private http: Http) { }

    getCities() {
        return this.http.get(this.backendURL + '/restaurantsCities');
    }

    getCuisines() {
        return this.http.get(this.backendURL + '/availableCuisines');
    }
}
