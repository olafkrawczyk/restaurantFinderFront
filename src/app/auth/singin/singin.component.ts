import { User } from './../../models/user';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSingIn(form: NgForm) {
    this.authService.signInClient(form.value.emailAddress, form.value.password).subscribe(
      (response) => {
        this.authService.setUser(response.json());
        console.log(this.authService.getUser());
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
