import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantListItemComponent } from './restaurants/restaurants-list/restaurant-list-item/restaurant-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantsComponent, RestaurantsListComponent, RestaurantListItemComponent]
})
export class OwnerModule { }
