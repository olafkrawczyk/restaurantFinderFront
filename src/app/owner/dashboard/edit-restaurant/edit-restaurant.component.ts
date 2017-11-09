import { ActivatedRoute, Params } from '@angular/router';
import { HelperRestService } from './../../../shared/helper.rest.service';
import { MenuItem } from './../../../models/menu-item.model';
import { RestaurantService } from './../../../restaurants/restaurant.service';
import { Table } from './../../../models/table.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  id = null;
  restaurant = null;
  editMode = false;
  cuisines = [];
  tables: Table[] = [];
  menu: MenuItem[] = [];
  restaurantForm: FormGroup;

  constructor(private restaurantService: RestaurantService,
              private helperService: HelperRestService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.initForm();

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        if (this.editMode) {
          this.loadRestaurant();
        }
      }
    );

    this.helperService.getCuisines().subscribe(
      data => this.cuisines = data.json()
    );
  }

  initForm() {
    let name = '';
    let photo = '';
    let description = '';
    let cuisine = this.cuisines[0];
    let openHour = '';
    let closeHour = '';
    let phone = '';
    let email = '';
    let address = {
      street: '',
      city: '',
      postalCode: ''
    };

    if (this.editMode) {
      name = this.restaurant.name;
      photo = this.restaurant.photo;
      description = this.restaurant.description;
      cuisine = this.restaurant.cuisine;
      openHour = this.restaurant.openHour;
      closeHour = this.restaurant.closeHour;
      phone = this.restaurant.phone;
      email = this.restaurant.email;
      address = this.restaurant.address;
      this.menu = this.restaurant.menuItems;
      this.tables = this.restaurant.tables;
    }

    console.log('Initialization....');

    this.restaurantForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'cuisine': new FormControl(cuisine),
      'photo': new FormControl(photo),
      'description': new FormControl(description),
      'openHour': new FormControl(openHour),
      'closeHour': new FormControl(closeHour),
      'phone': new FormControl(phone),
      'email': new FormControl(email),
      'address' : new FormGroup({
        'street': new FormControl(address.street),
        'city': new FormControl(address.city),
        'postalCode': new FormControl(address.postalCode)
      })
    });
  }

  loadRestaurant() {
    this.restaurantService.getRestaurantInfo(this.id).subscribe(
      (data) => {
        this.restaurant = data.json();
        console.log(this.restaurant);
        this.initForm();
      },
      error => console.log(error)
    );
  }
  onSubmit() {
    console.log('Submited!');
    this.restaurantForm.value.tables = this.tables;
    this.restaurantForm.value.menuItems = this.menu;
    console.log(this.restaurantForm.value);
    this.restaurantService.saveNewRestaurant(this.restaurantForm.value).subscribe(
      (respose) => {
        console.log('Success!!!');
        this.restaurantService.refreshRestaurantsList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddTable(tableId, tableSeats) {
    this.tables.push({id: null, restaurantTableId: tableId, seats: tableSeats, restaurantId: -1});
  }

  onDeleteTable(index) {
    this.tables.splice(index, 1);
  }

  onAddDish(name: string, price: number, description: string) {
    this.menu.push({dishName: name, price: price, description: description});
  }

  onDeleteDish(index) {
    this.menu.splice(index, 1);
  }
}
