import { User } from './../models/user';
import {Injectable} from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

export const AUTH_HEADER_NAME = 'Authorization';
export const TOKEN_NAME = 'tableRsvToken';


@Injectable()
export class AuthService {
    private user: User;
    private hasOwnerRights = false;
    private token;
    private tokenRaw;
    private headers: Headers = new Headers();

    constructor(private router: Router, private http: Http) {
        const savedToken = localStorage.getItem(TOKEN_NAME);
        if (savedToken != null) {
            this.setToken(savedToken);
            this.headers.append(AUTH_HEADER_NAME, this.tokenRaw);
            this.loginUserViaToken();
        }
     }

    signUpClient(user: User) {
        return this.http.post('http://localhost:8080/clients/new', user);
    }

    signInClient(email: string, password: string) {
        return this.http.post('http://localhost:8080/login', {username: email, password: password});
    }

    signUpOwner(user: User) {
        return this.http.post('http://localhost:8080/owners/new', user);
    }

    signInOwner(email: string, password: string) {
        return this.http.post('http://localhost:8080/owners/login', {username: email, password: password});
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
        this.removeToken();
    }

    setToken(inputToken: string) {
        const token = jwt_decode(inputToken);
        localStorage.setItem(TOKEN_NAME, inputToken);
        this.token = token;
        this.tokenRaw = inputToken;
    }

    removeToken() {
        localStorage.removeItem(TOKEN_NAME);
        this.token = null;
        this.tokenRaw = null;
    }

    getLoggedOwnerData(email: string) {
        console.log(this.headers);
        let params = new URLSearchParams();
        params.append('email', email);
        console.log(params);
        this.http.get('http://localhost:8080/owners/getByEmail', {params: params, headers: this.headers }).subscribe(
            (data) => {
                this.user = data.json();
                this.setOwner();
                this.router.navigate(['dashboard']);
            },
            error => console.log(error)
        );
    }

    getLoggedClientData(email: string) {
        let params = new URLSearchParams();
        console.log(email);
        params.append('email', email);
        console.log(this.headers);
        console.log(params);
        this.http.get('http://localhost:8080/clients/getByEmail', {params: params, headers: this.headers }).subscribe(
            (data) => {
                this.user = data.json();
                this.router.navigate(['/']);
            },
            error => console.log(error)
        );
    }

    loginUserViaToken() {
        if (this.token['owner'] === 'true') {
            this.getLoggedOwnerData(this.token['sub']);
        } else {
            this.getLoggedClientData(this.token['sub']);
        }
    }
}
