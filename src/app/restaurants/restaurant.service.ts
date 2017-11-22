import { AuthService } from './../auth/auth.service';
import { Restaurant } from './../models/restaurant';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { baseURL } from '../app.component';

@Injectable()
export class RestaurantService {

    restaurantsListChanged = new Subject<Restaurant[]>();
    restaurantsStubsList: Restaurant[] = [];

    constructor(private router: Router, private http: Http, private authService: AuthService) {
        if (authService.isOwner()) {
            this.refreshRestaurantsList();
        }
    }

    saveNewRestaurant(requestBody) {
        return this.http.post(baseURL + '/restaurants/new', requestBody, { headers: this.authService.getHeaders() });
    }

    refreshRestaurantsList() {
        const owner = this.authService.getUser();
        this.http.get(baseURL + '/owners/' + owner.emailAddress + '/restaurants/stubs',
            { headers: this.authService.getHeaders() }).subscribe(
            (data) => {
                this.restaurantsStubsList = data.json();
                this.restaurantsListChanged.next(this.restaurantsStubsList.slice());
            },
            (error) => {
                console.log(error);
            }
            );
        this.restaurantsListChanged.next();
    }

    getRestaurantInfo(id: number) {
        return this.http.get(baseURL + '/restaurants/' + id, { headers: this.authService.getHeaders() });
    }

    getRestaurantsByParams(data) {
        return this.http.post(baseURL + '/restaurants/findByParameters', data, { headers: this.authService.getHeaders() });
    }

    updateRestaurant(id: number, data) {
        return this.http.post(baseURL + '/restaurants/' + id, data, { headers: this.authService.getHeaders() });
    }

    removeTable(id) {
        return this.http.post(baseURL + '/tables/delete/' + id, null, { headers: this.authService.getHeaders() });
    }

    addTable(restaurantId, restaurantTableId, seats) {
        return this.http.post(baseURL + '/tables/add',
            { restaurantTableId: restaurantTableId, restaurantId: restaurantId, seats: seats },
            { headers: this.authService.getHeaders() });
    }

    getRestaurantTables(restaurantId) {
        return this.http.get(baseURL + '/tables/restaurant/' + restaurantId, { headers: this.authService.getHeaders() });
    }
}
