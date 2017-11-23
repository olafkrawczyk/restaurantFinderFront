import { AuthService } from './../auth/auth.service';
import { Reservation } from './../models/reservation.model';
import { Http, URLSearchParams, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { baseURL } from '../app.component';


@Injectable()
export class ReservationService {

    clientReservations = new Subject<any>();
    restaurantReservations = new Subject<any>();

    constructor(private http: Http, private authService: AuthService) { }

    getRestaurantReservations(restaurantId) {

        this.http.get(baseURL + '/reservations/restaurant/' + restaurantId,
        { headers: this.authService.getHeaders() }).subscribe(
        (data) => {
            const reservations = data.json();
            this.restaurantReservations.next(reservations);
        },
        (error) => console.log(error)
        );
    }

    getFreeSlots(date: Date, restaurantId: number, seats: number) {
        const params = new URLSearchParams();

        params.append('seats', String(seats));
        params.append('restaurantId', String(restaurantId));
        params.append('date', date.toISOString());

        return this.http.get(baseURL + '/reservations/availableSlots',
            { params: params, headers: this.authService.getHeaders() });
    }

    makeReservation(date: Date, restauranId: number, tableId: number) {
        const user = this.authService.getUser();
        return this.http.post(baseURL + '/reservations/makeReservation',
            {
                reservationDateISO: date.toISOString(), restaurantId: restauranId,
                tableId: tableId, clientEmailAddress: user.emailAddress
            }, { headers: this.authService.getHeaders() });
    }

    getPendingReservations(restaurantId: number) {
        return this.http.get(baseURL + '/reservations/pendingReservations/' + restaurantId,
            { headers: this.authService.getHeaders() });
    }

    acceptReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post(baseURL + '/reservations/accept', params, { headers: this.authService.getHeaders() });
    }

    rejectReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post(baseURL + '/reservations/reject', params, { headers: this.authService.getHeaders() });
    }

    getClientReservations() {
        const clientId = this.authService.getUser().id;
        this.http.get(baseURL + '/reservations/client/' + clientId.toString(),
            { headers: this.authService.getHeaders() }).subscribe(
            (data) => {
                const reservations = data.json();
                this.clientReservations.next(reservations);
            },
            (error) => console.log(error)
            );
    }

    cancelReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());
        console.log(this.authService.getHeaders());
        this.http.post(baseURL + '/reservations/cancel', params, { headers: this.authService.getHeaders() }).subscribe(
            (data) => {
                this.getClientReservations();
            },
            (error) => console.log(error)
        );
    }
}

