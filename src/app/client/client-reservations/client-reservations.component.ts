import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { ReservationService } from './../../reservations/reservations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Reservation } from './../../models/reservation.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-client-reservations',
  templateUrl: './client-reservations.component.html',
  styleUrls: ['./client-reservations.component.css']
})
export class ClientReservationsComponent implements OnInit, OnDestroy {

  reservations: {};
  reservationSubscription: Subscription;
  constructor(private reservationService: ReservationService, private authService: AuthService) { }

  ngOnInit() {
    this.reservationSubscription = this.reservationService.clientReservations.subscribe(
      (data) => this.reservations = data.reverse()
    );
    this.reservationService.getClientReservations();
  }


  ngOnDestroy() {
    this.reservationSubscription.unsubscribe();
  }

}
