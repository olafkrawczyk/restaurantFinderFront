import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-reservation-litem',
  templateUrl: './client-reservation-litem.component.html',
  styleUrls: ['./client-reservation-litem.component.css']
})
export class ClientReservationLitemComponent implements OnInit {

  _reservation;
  constructor(private router: Router) { }

  @Input() set reservation(reservation) {
    reservation.reservationDate = new Date(reservation.reservationDate);
    this._reservation = reservation;
  }

  ngOnInit() {
  }

  navigateToRestaurant() {
    this.router.navigate(['/restaurant', this._reservation.restaurant.id]);
  }
}
