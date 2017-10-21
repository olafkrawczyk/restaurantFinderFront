import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class RestaurantService {

    constructor(private router: Router, private http: Http) { }

    signUpClient(user: User) {
        return this.http.post('http://localhost:8080/clients', user);
    }

    saveNewRestaurant(requestBody) {
        return this.http.post('http://localhost:8080/restaurants/new', requestBody);
    }
}
