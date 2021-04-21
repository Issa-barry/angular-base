import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

    export class ApiService {
    redirectUrl: string ="";
    baseUrl:string = "http://localhost/auth-base/auth-base-back";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient : HttpClient) { }

    public userlogin(username:string, password:string) {
     alert(username)
     return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
        }));
    }

    public userregistration(name:string,email:string,pwd:string) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
    .pipe(map(Users => {
    return Users;
    }));
    }
    
    public _getUser(){
      
    }

    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn():Observable<boolean> | Promise<boolean> | boolean {
        const usertoken = this.getToken();
        if (usertoken != null) {
        return true
    }
    return false;
    }
}