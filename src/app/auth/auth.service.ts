import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private user: User;
    constructor(private router: Router, private http: Http) { }

    signUpUser(user: User) {
        return this.http.post('http://localhost:8080/clients', user);
    }

    getUser() {
        return this.user;
    }
}
