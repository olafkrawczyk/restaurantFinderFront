import { HelperRestService } from './../shared/helper.rest.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantService } from './../restaurants/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: DatepickerOptions = {
    minYear: new Date().getFullYear(),
    maxYear: new Date().getFullYear() + 1
  };

  date: Date;
  people: string;
  time: string;
  restaurants: Restaurant[];

  cuisines;
  cities;

  constructor(private authService: AuthService, private restaurantService: RestaurantService,
    private router: Router, private helperService: HelperRestService) {
    this.date = new Date();
  }

  ngOnInit() {
    this.helperService.getCuisines().subscribe(
      (data) => {
        this.cuisines = data.json();
      },
      error => console.log(error)
    );
    this.helperService.getCities().subscribe(
      (data) => {
        this.cities = data.json();
      },
      (error) => console.log(error)
    );
  }

  getUser() {
    return this.authService.getUser() != null;
  }

  onSearchSubmit(form: NgForm) {
    console.log(form.value);
    this.people = form.value['people'];
    this.time = form.value['time'];
    this.date.setHours(+this.time.slice(0, 2), +this.time.slice(3, 5));
    this.restaurantService.getRestaurantsByParams(form.value).subscribe(
      (data) => {
        console.log(data.json());
        this.restaurants = data.json();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBookRestaurantClicked(id: number) {
    this.router.navigate(['/restaurant/', id], { queryParams: { people: this.people, date: this.date, time: this.time } });
  }
}
