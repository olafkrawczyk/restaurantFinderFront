import { RestaurantService } from './../../../restaurants/restaurant.service';
import { Table } from './../../../models/table.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  cuisines = ['ITALIAN', 'THAI', 'Japanese', 'Fast Food'];
  tables: Table[] = [];
  restaurantForm: FormGroup;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'cuisine': new FormControl(this.cuisines[0]),
      'photo': new FormControl(null),
      'description': new FormControl(null),
      'openHour': new FormControl(null),
      'closeHour': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'address' : new FormGroup({
        'street': new FormControl(null),
        'city': new FormControl(null),
        'postalCode': new FormControl(null)
      })
    });
  }

  onSubmit() {
    console.log('Submited!');
    this.restaurantForm.value.tables = this.tables;
    console.log(this.restaurantForm.value);
    this.restaurantService.saveNewRestaurant(this.restaurantForm.value).subscribe(
      (respose) => {
        console.log('Success!!!');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddTable(tableId, tableSeats) {
    this.tables.push({id: null, restaurantTableId: tableId, seats: tableSeats});
  }

  onDeleteTable(index) {
    this.tables.splice(index, 1);
  }
}
