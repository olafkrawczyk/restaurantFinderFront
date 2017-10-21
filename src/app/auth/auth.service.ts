import { User } from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private user: User;
    private hasOwnerRights = false;
    constructor(private router: Router, private http: Http) { }

    signUpClient(user: User) {
        return this.http.post('http://localhost:8080/clients', user);
    }

    signInClient(email: string, password: string) {
        return this.http.post('http://localhost:8080/clients/login', {emailAddress: email, password: password});
    }

    signUpOwner(user: User) {
        return this.http.post('http://localhost:8080/owners/new', user);
    }

    signInOwner(email: string, password: string) {
        return this.http.post('http://localhost:8080/owners/login', {emailAddress: email, password: password});
    }

    getUser() {
        return this.user;
    }

    setUser(user: User) {
        this.user = user;
    }

    setOwner() {
        this.hasOwnerRights = true;
    }

    isOwner() {
        return this.hasOwnerRights;
    }

    logoutUser() {
        this.user = null;
        this.hasOwnerRights = false;
    }
}
