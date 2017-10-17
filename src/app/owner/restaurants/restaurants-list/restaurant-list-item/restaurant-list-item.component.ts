import { Restaurant } from './../../../../models/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor() { }

  ngOnInit() {
  }

}
