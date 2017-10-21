import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  cuisines = ['Italian', 'Thai', 'Japanese', 'Fast Food'];
  restaurantForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.restaurantForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'cuisine': new FormControl(this.cuisines[0]),
      'photo': new FormControl(null),
      'description': new FormControl(null),
      'address' : new FormGroup({
        'phone': new FormControl(null),
        'email': new FormControl(null),
        'street': new FormControl(null),
        'city': new FormControl(null)
      })
    });
  }

  onSubmit() {
    console.log('Submited!');
    console.log(this.restaurantForm.value);
  }
}
