import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
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
        this.authService.setUser(response.json());
        this.authService.setOwner();
        console.log(this.authService.getUser());
        this.router.navigate(['dashboard']);
      },
      (error: Response) => {
        console.log(error);
        this.errorMessage = 'Could not find user with gievn email address';
      }
    );
  }
}
