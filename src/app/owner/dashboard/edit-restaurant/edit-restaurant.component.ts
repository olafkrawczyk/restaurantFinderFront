import { Table } from './../../../models/table.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  cuisines = ['Italian', 'Thai', 'Japanese', 'Fast Food'];
  tables: Table[] = [];
  restaurantForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.restaurantForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'cuisine': new FormControl(this.cuisines[0]),
      'photo': new FormControl(null),
      'description': new FormControl(null),
      'openHour': new FormControl(null),
      'closeHour': new FormControl(null),
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
    console.log(this.tables);
  }

  onAddTable(tableId, tableSeats) {
    console.log('Table: ' + tableId + ' seats: ' + tableSeats);
    this.tables.push({id: 1, restaurantId: tableId, seats: tableSeats});
  }

  onDeleteTable(index) {
    this.tables.splice(index, 1);
  }
}
