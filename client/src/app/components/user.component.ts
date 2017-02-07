import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { User } from '../models/user';
const alertify = require('alertify');

@Component({
    templateUrl: './app/components/user.component.html'
})
export class UserComponent implements OnInit {
    users: User[];
    filterRole: string = 'all';
    filterGender: string = 'all';
    filterDirection: string = 'a-z';

    constructor(private service: UserService) { }

    ngOnInit() {
        this.service.getUsers().subscribe(users => this.users = users);
    }

    delete(user: User) {
        alertify.confirm(
            'ARE YOU SURE?',
            `Delete user: ${user.firstName} ${user.lastName}?`,
            () => {
                this.service.deleteUser(user._id)
                    .subscribe(() => {
                        this.service.getUsers().subscribe(users => this.users = users)
                    });
            },
            () => true);
    }
}