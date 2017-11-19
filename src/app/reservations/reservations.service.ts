import { AuthService } from './../auth/auth.service';
import { Reservation } from './../models/reservation.model';
import { Http, URLSearchParams, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ReservationService {

    clientReservations = new Subject<any>();
    restaurantReservations = new Subject<any>();

    constructor(private http: Http, private authService: AuthService) { }

    getRestaurantReservations(restaurantId) {

        this.http.get('http://localhost:8080/reservations/restaurant/' + restaurantId,
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

        return this.http.get('http://localhost:8080/reservations/availableSlots',
            { params: params, headers: this.authService.getHeaders() });
    }

    makeReservation(date: Date, restauranId: number, tableId: number) {
        const user = this.authService.getUser();
        return this.http.post('http://localhost:8080/reservations/makeReservation',
            {
                reservationDateISO: date.toISOString(), restaurantId: restauranId,
                tableId: tableId, clientEmailAddress: user.emailAddress
            }, { headers: this.authService.getHeaders() });
    }

    getPendingReservations(restaurantId: number) {
        return this.http.get('http://localhost:8080/reservations/pendingReservations/' + restaurantId,
            { headers: this.authService.getHeaders() });
    }

    acceptReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post('http://localhost:8080/reservations/accept', params, { headers: this.authService.getHeaders() });
    }

    rejectReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post('http://localhost:8080/reservations/reject', params, { headers: this.authService.getHeaders() });
    }

    getClientReservations() {
        const clientId = this.authService.getUser().id;
        this.http.get('http://localhost:8080/reservations/client/' + clientId.toString(),
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
        this.http.post('http://localhost:8080/reservations/cancel', params, { headers: this.authService.getHeaders() }).subscribe(
            (data) => {
                this.getClientReservations();
            },
            (error) => console.log(error)
        );
    }
}

