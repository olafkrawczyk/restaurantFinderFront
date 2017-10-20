import { OwnerRoutingModule } from './owner-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule
  ],
  declarations: [DashboardComponent, SidebarComponent]
})
export class OwnerModule { }
