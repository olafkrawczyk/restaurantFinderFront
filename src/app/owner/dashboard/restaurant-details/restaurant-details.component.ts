import { RestaurantService } from './../../../restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId: string;

  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.restaurantId = params['id'];
      }
    );

    this.restaurantService.getRestaurantInfo(Number(this.restaurantId)).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

}
