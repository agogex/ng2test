"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../services/user.service");
var alertify = require('alertify');
var CreateComponent = (function () {
    function CreateComponent(fb, uservice, router) {
        this.fb = fb;
        this.uservice = uservice;
        this.router = router;
        this.formErrors = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.errorMessages = {
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
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.formBuild();
    };
    CreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.uservice.checkEmail(this.form.value.email)
            .subscribe(function (res) {
            if (res.message === 'Email is free') {
                _this.uservice.createUser(_this.form.value)
                    .subscribe(function () {
                    _this.router.navigate(['/users']);
                });
            }
            else {
                alertify.error(res.message);
            }
        });
    };
    CreateComponent.prototype.formBuild = function () {
        var _this = this;
        this.form = this.fb.group({
            companyId: [''],
            firstName: ['', [forms_1.Validators.minLength(3), forms_1.Validators.maxLength(15)]],
            lastName: ['', [forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.pattern('[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})')]],
            gender: [''],
            role: ['']
        });
        this.form.valueChanges.subscribe(function (data) { return _this.formValidation(); });
    };
    CreateComponent.prototype.formValidation = function () {
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                for (var error in input.errors) {
                    this.formErrors[field] = this.errorMessages[field][error];
                    console.log(this.formErrors[field]);
                }
            }
        }
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        templateUrl: './app/components/create.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService,
        router_1.Router])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map