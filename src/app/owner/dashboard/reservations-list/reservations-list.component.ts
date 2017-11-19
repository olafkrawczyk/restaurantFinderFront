import { Subscription } from 'rxjs/Subscription';
import { ReservationService } from './../../../reservations/reservations.service';
import { RestaurantService } from './../../../restaurants/restaurant.service';
import { Restaurant } from './../../../models/restaurant';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  errorMessage = '';
  restaurantId;
  reservations;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.restaurantId = params['id'];
      }
    );
    this.subscription = this.reservationService.restaurantReservations.subscribe(
      data => {
        const temp = data;
        temp.forEach(element => {
          element.reservationDate = new Date(element.reservationDate);
        });
        this.reservations = temp;
      }
    );

    this.reservationService.getRestaurantReservations(this.restaurantId);
  }

  onAcceptReservation(reservationId: number) {
    this.reservationService.acceptReservation(reservationId).subscribe(
      (data) => {
        console.log(data);
        this.reservationService.getRestaurantReservations(this.restaurantId);
      },
      (error) => console.log(error)
    );
  }

  onRejectReservation(reservationId: number) {
    this.reservationService.rejectReservation(reservationId).subscribe(
      (data) => {
        console.log(data);
        this.reservationService.getRestaurantReservations(this.restaurantId);
      },
      (error) => console.log(error)
    );
  }

  OnDestroy() {
    this.subscription.unsubscribe();
  }

}
