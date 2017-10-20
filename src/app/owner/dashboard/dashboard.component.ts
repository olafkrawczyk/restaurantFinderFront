import { Restaurant } from './../../models/restaurant';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  restaurants: Restaurant[] = [
    {name: '7 misek', description: 'Thati fusion', imageURL: '#'},
    {name: 'Pasta', description: 'Italian', imageURL: '#'},
    {name: 'Patelnia na Szewskiej', description: 'Custom', imageURL: '#'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
