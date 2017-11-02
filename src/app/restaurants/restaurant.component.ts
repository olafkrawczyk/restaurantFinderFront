import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    date: any;
    people: any;
    time: any;

    constructor( private activatedRout: ActivatedRoute) {
        this.date = new Date();
    }

    ngOnInit(): void {
        this.activatedRout.params.subscribe(
            (params: Params) => {
                console.log('params');
                console.log(params);
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
    }

    
}
