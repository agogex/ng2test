import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private apiUrl: string = '/api/users';
    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(this.apiUrl)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    getUser(id: string): Observable<User> {
        return this.http.get(`${this.apiUrl}/${id}`)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    createUser(user: User): Observable<User> {
        return this.http.post(this.apiUrl, user)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    updateUser(id: string, user: User): Observable<User> {
        return this.http.put(`${this.apiUrl}/${id}`, user)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    deleteUser(id: string): Observable<User> {
        return this.http.delete(`${this.apiUrl}/${id}`)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    checkEmail(email: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/email/${email}`)
            .map(res => res.json())
            .catch(this.errorHandle);
    }

    private errorHandle(err: any) {
        return Observable.throw(err.json());
    }
}