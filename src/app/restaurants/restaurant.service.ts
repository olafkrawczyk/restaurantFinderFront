import { Restaurant } from './../models/restaurant';
import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RestaurantService {

    restaurantsListChanged = new Subject<Restaurant[]>();

    constructor(private router: Router, private http: Http) { }

    saveNewRestaurant(requestBody) {
        return this.http.post('http://localhost:8080/restaurants/new', requestBody);
    }
}
