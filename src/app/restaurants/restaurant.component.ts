import { Reservation } from './../models/reservation.model';
import { Table } from './../models/table.model';
import { ReservationService } from './../reservations/reservations.service';
import { NgForm } from '@angular/forms';
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
    date: Date;
    people: any;
    time: string;

    restaurant: Restaurant;
    reservations: Reservation[];

    constructor(private activatedRout: ActivatedRoute, private restuarantService: RestaurantService,
                private reservationService: ReservationService) {
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

    onTableCheckSubmit(form: NgForm) {
        console.log(form.value);
        let reservatonsTemp: Reservation[] = [];
        const reservationDateTime = this.parseDateTime(this.date, this.time);
        this.reservationService.getFreeSlots(reservationDateTime, this.restaurant.id, form.value['people']).subscribe(
            (data) => {
                reservatonsTemp = data.json();
                reservatonsTemp.forEach(element => {
                    element.reservationDate = new Date(element.reservationDate);
                });
                console.log(reservatonsTemp);
                this.reservations = reservatonsTemp;
            },
            error => console.log(error)
        );
    }

    parseDateTime(date, time) {
        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];

        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
    }

    onBookClicked(reservation: Reservation) {
        this.reservationService.makeReservation(reservation.reservationDate,
                reservation.restaurantTable.restaurantId,
                reservation.restaurantTable.id).subscribe(
                (data) => console.log(data.text())
            );
    }

}
