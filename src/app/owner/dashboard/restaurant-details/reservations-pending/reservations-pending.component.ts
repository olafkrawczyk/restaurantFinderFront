import { element } from 'protractor';
import { ReservationService } from './../../../../reservations/reservations.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';


@Component({
  selector: 'app-reservations-pending',
  templateUrl: './reservations-pending.component.html',
  styleUrls: ['./reservations-pending.component.css']
})
export class ReservationsPendingComponent implements OnInit {

  restaurantId_;
  reservations = [];

  constructor(private reservationServie: ReservationService) { }

  ngOnInit() {
    this.getPendingReservations();
  }

  @Input()
  set restaurantId(id) {
    this.restaurantId_ = id;
    this.getPendingReservations();
  }

  getPendingReservations() {
    this.reservationServie.getPendingReservations(this.restaurantId_).subscribe(
      (data) => {
        const temp = data.json();
        temp.forEach(elem => {
          elem.reservationDate = new Date(elem.reservationDate);
          elem.creationDate = new Date(elem.creationDate);
        });
        this.reservations = temp;
      } ,
      (error) => console.log(error)
    );
  }

}
