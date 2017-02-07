import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

const alertify = require('alertify');

@Component({
    templateUrl: './app/components/create.component.html'
})
export class CreateComponent implements OnInit {
    form: FormGroup;
    formErrors = {
        firstName: '',
        lastName: '',
        email: ''
    };
    errorMessages = {
        firstName: {
            minlength: 'First Name must be 3 characters.',
            maxlength: 'First Name can\'t be longer than 15 characters.'
        },
        lastName: {
            minlength: 'Lastname must be 3 characters.'
        },
        email: {
            pattern: 'Enter valid email address.'
        }
    };

    constructor(
        private fb: FormBuilder,
        private uservice: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.formBuild();
    }

    onSubmit() {
        this.uservice.checkEmail(this.form.value.email)
            .subscribe(res => {
                if (res.message === 'Email is free') {
                    this.uservice.createUser(this.form.value)
                        .subscribe(() => {
                            this.router.navigate(['/users']);
                        });
                } else {
                    alertify.error(res.message);
                }
            });

    }

    private formBuild() {
        this.form = this.fb.group({
            companyId: [''],
            firstName: ['', [Validators.minLength(3), Validators.maxLength(15)]],
            lastName: ['', [Validators.minLength(3)]],
            email: ['', [Validators.pattern('[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})')]],
            gender: [''],
            role: ['']
        });

        this.form.valueChanges.subscribe(data => this.formValidation());
    }

    private formValidation() {
        for (let field in this.formErrors) {
            this.formErrors[field] = '';

            let input = this.form.get(field);

            if (input.invalid && input.dirty) {
                for(let error in input.errors) {
                    this.formErrors[field] = this.errorMessages[field][error];
                    console.log(this.formErrors[field]);
                }
            }
        }
    }

}