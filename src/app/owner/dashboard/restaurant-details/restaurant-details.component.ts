import { Restaurant } from './../../../models/restaurant';
import { RestaurantService } from './../../../restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId: string;
  restaurant: Restaurant;

  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.restaurantId = params['id'];
        this.getRestaurantData();
      }
    );
  }

  getRestaurantData() {
    this.restaurantService.getRestaurantInfo(Number(this.restaurantId)).subscribe(
      (data) => this.restaurant = data.json(),
      (error) => console.log(error)
    );
  }

  onEditClicked() {
    this.router.navigate(['/dashboard/edit', this.restaurantId]);
  }

  onReservations() {
    this.router.navigate(['/dashboard/reservations', this.restaurantId]);
  }
  
}
