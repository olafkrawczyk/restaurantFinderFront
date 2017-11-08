import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

  isOwner() {
    return this.authService.isOwner();
  }
  getUser() {
    return this.authService.getUser();
  }
}
