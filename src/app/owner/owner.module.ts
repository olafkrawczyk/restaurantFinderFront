import { ReactiveFormsModule } from '@angular/forms';
import { OwnerRoutingModule } from './owner-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { EditRestaurantComponent } from './dashboard/edit-restaurant/edit-restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardComponent, SidebarComponent, EditRestaurantComponent]
})
export class OwnerModule { }
