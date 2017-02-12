import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
    templateUrl: './app/components/edit.component.html'
})
export class EditComponent implements OnInit {
    user: User;
    form: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private uservice: UserService,
        private fb: FormBuilder
    ) { }

    onSubmit() {
        this.form.value.email = this.form.value.email.toLowerCase();
        this.uservice.updateUser(this.user._id, this.form.value)
            .subscribe(() => {
                this.router.navigate(['/users']);
            });
        console.log('form has been sent', this.form.value);
    }

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe(id => {
                this.uservice.getUser(id)
                    .subscribe(user => {
                        this.user = user;
                        this.form = this.fb.group({
                            companyId: [user.companyId],
                            firstName: [user.firstName],
                            lastName: [user.lastName],
                            email: [user.email],
                            gender: [user.gender],
                            role: [user.role]
                        });
                    });
            });
    }
}