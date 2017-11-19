import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerRoutingModule } from './owner-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { EditRestaurantComponent } from './dashboard/edit-restaurant/edit-restaurant.component';
import { RestaurantDetailsComponent } from './dashboard/restaurant-details/restaurant-details.component';
import { ReservationsPendingComponent } from './dashboard/restaurant-details/reservations-pending/reservations-pending.component';
import { ReservationsListComponent } from './dashboard/reservations-list/reservations-list.component';
import { ReservationListItemComponent } from './dashboard/reservations-list/reservation-list-item/reservation-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardComponent, SidebarComponent, EditRestaurantComponent, RestaurantDetailsComponent, ReservationsPendingComponent, ReservationsListComponent, ReservationListItemComponent]
})
export class OwnerModule { }
