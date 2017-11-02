import { AuthService } from './../auth/auth.service';
import { Restaurant } from './../models/restaurant';
import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

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
        return this.http.post('http://localhost:8080/restaurants/new', requestBody);
    }

    refreshRestaurantsList() {
       const owner = this.authService.getUser();
       this.http.get('http://localhost:8080/owners/' + owner.emailAddress + '/restaurants/stubs').subscribe(
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
        return this.http.get('http://localhost:8080/restaurants/' + id);
    }

    getRestaurantsByParams(data) {
        return this.http.post('http://localhost:8080/restaurants/findByParameters', data);
    }
}
