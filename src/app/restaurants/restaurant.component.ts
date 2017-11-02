import { RestaurantService } from './restaurant.service';
import { Restaurant } from './../models/restaurant';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    id: number;
    date: any;
    people: any;
    time: any;

    restaurant: Restaurant;

    constructor( private activatedRout: ActivatedRoute, private restuarantService: RestaurantService) {
        this.date = new Date();
    }

    ngOnInit(): void {
        this.activatedRout.params.subscribe(
            (params: Params) => {
                console.log('params');
                console.log(params);
                this.id = params['id'];
            }
        );
        this.activatedRout.queryParams.subscribe(
            (params: Params) => {
                console.log('query params');
                this.time = params['time'];
                this.people = params['people'];
                this.date = new Date(params['date']);
                console.log(params);
            }
        );
        this.restuarantService.getRestaurantInfo(this.id).subscribe(
            (data) => {
                this.restaurant = data.json();
            },
            (error) => {
                console.log(error);
            }
        );
    }

}
