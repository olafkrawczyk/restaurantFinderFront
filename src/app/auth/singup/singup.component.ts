import { User } from './../../models/user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [AuthService]
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

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
    this.authService.signUpClient(user).subscribe(
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
