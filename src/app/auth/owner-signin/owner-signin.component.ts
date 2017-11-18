import { Router } from '@angular/router';
import { AuthService, AUTH_HEADER_NAME } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-signin',
  templateUrl: './owner-signin.component.html',
  styleUrls: ['./owner-signin.component.css']
})
export class OwnerSigninComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSingIn(form: NgForm) {
    this.authService.signInOwner(form.value.emailAddress, form.value.password).subscribe(
      (response) => {
        const token = response.headers.get(AUTH_HEADER_NAME);
        this.authService.setToken(token);
        this.authService.loginUserViaToken();
      },
      (error: Response) => {
        console.log(error);
        this.errorMessage = 'Could not find user with gievn email address';
      }
    );
  }
}
