import { RestaurantService } from './../../restaurants/restaurant.service';
import { Subscription } from 'rxjs/Subscription';
import { Restaurant } from './../../models/restaurant';
import { RouterModule } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  restaurantStubSubscription: Subscription;
  restaurants: Restaurant[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantStubSubscription = this.restaurantService.restaurantsListChanged.subscribe(
      (data: Restaurant[]) => {
        this.restaurants = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.restaurantService.refreshRestaurantsList();
  }

  ngOnDestroy() {
    this.restaurantStubSubscription.unsubscribe();
  }

}
