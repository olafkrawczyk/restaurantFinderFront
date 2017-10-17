import { Restaurant } from './../../../models/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[] = [
    new Restaurant('Nowa', 'Opisik', 'http://www.chillitorun.pl/wp-content/uploads/2016/09/restaurant-939435_960_720.jpg'),
    new Restaurant('Stara', 'Opisik', 'http://www.chillitorun.pl/wp-content/uploads/2016/09/restaurant-939435_960_720.jpg'),
    new Restaurant('Odnowiona', 'Opisik', 'http://www.chillitorun.pl/wp-content/uploads/2016/09/restaurant-939435_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
