import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date;
  constructor(private authService: AuthService) {
    this.date = new Date();
  }

  ngOnInit() {
  }

  getUser() {
    return this.authService.getUser() != null;
  }
}
