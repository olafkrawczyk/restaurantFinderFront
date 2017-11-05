import { ReservationService } from './reservations/reservations.service';
import { RestaurantService } from './restaurants/restaurant.service';
import { OwnerModule } from './owner/owner.module';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDropdownDirective } from './shared/app-dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurants/restaurant.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, AppDropdownDirective, HeaderComponent, RestaurantComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    OwnerModule,
    NgDatepickerModule
  ],
  providers: [AuthService, RestaurantService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
