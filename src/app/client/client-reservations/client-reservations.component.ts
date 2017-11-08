import { AuthService } from './../../auth/auth.service';
import { ReservationService } from './../../reservations/reservations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Reservation } from './../../models/reservation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-reservations',
  templateUrl: './client-reservations.component.html',
  styleUrls: ['./client-reservations.component.css']
})
export class ClientReservationsComponent implements OnInit {

  reservations: {};
  constructor(private reservationService: ReservationService, private authService: AuthService) { }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getClientReservations(this.authService.getUser().id).subscribe(
      (data) => this.reservations = data.json(),
      (error) => console.log(error)
    );
  }

}
