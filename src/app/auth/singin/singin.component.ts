import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthService, TOKEN_NAME, AUTH_HEADER_NAME } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSingIn(form: NgForm) {
    this.authService.signInClient(form.value.emailAddress, form.value.password).subscribe(
      (response) => {
        const token = response.headers.get(AUTH_HEADER_NAME);
        this.authService.setToken(token);
        this.authService.loginUserViaToken();
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
