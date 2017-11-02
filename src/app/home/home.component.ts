import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantService } from './../restaurants/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date;
  people: string;
  time: string;
  restaurants: Restaurant[];

  constructor(private authService: AuthService, private restaurantService: RestaurantService,
              private router: Router) {
    this.date = new Date();
  }

  ngOnInit() {
  }

  getUser() {
    return this.authService.getUser() != null;
  }

  onSearchSubmit(form: NgForm) {
    console.log(form.value);
    this.people = form.value['people'];
    this.time = form.value['time'];
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
    this.router.navigate(['/restaurant/', id], {queryParams : {people: this.people, date: this.date, time: this.time}});
  }
}
