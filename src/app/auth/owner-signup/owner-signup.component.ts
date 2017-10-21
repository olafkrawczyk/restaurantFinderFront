import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User } from './../../models/user';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSingup(form: NgForm) {
    const user: User = {
      id: null,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      emailAddress: form.value.emailAddress,
      password: form.value.password
    };
    console.log(user);
    this.authService.signUpOwner(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['confirmation']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
