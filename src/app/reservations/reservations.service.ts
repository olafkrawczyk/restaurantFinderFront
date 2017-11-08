import { AuthService } from './../auth/auth.service';
import { Reservation } from './../models/reservation.model';
import { Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ReservationService {

    clientReservations = new Subject<any>();

    constructor(private http: Http, private authService: AuthService) {}

    getFreeSlots(date: Date, restaurantId: number, seats: number) {
        const params = new URLSearchParams();

        params.append('seats', String(seats));
        params.append('restaurantId', String(restaurantId));
        params.append('date', date.toISOString());

        return this.http.get('http://localhost:8080/reservations/availableSlots', {params: params});
    }

    makeReservation(date: Date, restauranId: number, tableId: number) {
        const user = this.authService.getUser();
        return this.http.post('http://localhost:8080/reservations/makeReservation',
        {reservationDateISO: date.toISOString(), restaurantId: restauranId,
            tableId: tableId, clientEmailAddress: user.emailAddress });
    }

    getPendingReservations(restaurantId: number) {
        return this.http.get('http://localhost:8080/reservations/pendingReservations/' + restaurantId);
    }

    acceptReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post('http://localhost:8080/reservations/accept', params);
    }

    rejectReservation(reservationId: number) {
        const params = new URLSearchParams();
        params.append('reservationId', reservationId.toString());

        return this.http.post('http://localhost:8080/reservations/reject', params);
    }

    getClientReservations() {
        const clientId = this.authService.getUser().id;
        this.http.get('http://localhost:8080/reservations/client/' + clientId.toString()).subscribe(
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

        this.http.post('http://localhost:8080/reservations/cancel', params).subscribe(
            (data) => {
                this.getClientReservations();
            },
            (error) => console.log(error)
        );
    }
}

