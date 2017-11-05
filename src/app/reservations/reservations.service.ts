import { Reservation } from './../models/reservation.model';
import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ReservationService {
    constructor(private http: Http) {}

    getFreeSlots(date: Date, restaurantId: number, seats: number) {
        const params = new URLSearchParams();

        params.append('seats', String(seats));
        params.append('restaurantId', String(restaurantId));
        params.append('date', date.toISOString());

        return this.http.get('http://localhost:8080/reservations/availableSlots', {params: params});
    }
}
