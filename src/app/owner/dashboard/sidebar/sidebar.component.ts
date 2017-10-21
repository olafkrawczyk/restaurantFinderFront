import { Router } from '@angular/router';
import { Restaurant } from './../../../models/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() restaurants: Restaurant[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
