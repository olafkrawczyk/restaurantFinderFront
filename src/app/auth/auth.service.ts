import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private user: User;
    constructor(private router: Router, private http: Http) { }

    signUpClient(user: User) {
        return this.http.post('http://localhost:8080/clients', user);
    }

    signInClient(email: string, password: string) {
        return this.http.post('http://localhost:8080/clients/login', {emailAddress: email, password: password});
    }

    getUser() {
        return this.user;
    }

    setUser(user: User) {
        this.user = user;
    }

    logoutUser() {
        this.user = null;
    }
}
