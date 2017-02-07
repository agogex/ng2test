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
var EditComponent = (function () {
    function EditComponent(router, route, uservice, fb) {
        this.router = router;
        this.route = route;
        this.uservice = uservice;
        this.fb = fb;
    }
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.uservice.updateUser(this.user._id, this.form.value)
            .subscribe(function () {
            _this.router.navigate(['/users']);
        });
        console.log('form has been sent', this.form.value);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.uservice.getUser(id)
                .subscribe(function (user) {
                _this.user = user;
                _this.form = _this.fb.group({
                    companyId: [user.companyId],
                    firstName: [user.firstName],
                    lastName: [user.lastName],
                    email: [user.email],
                    gender: [user.gender],
                    role: [user.role]
                });
            });
        });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        templateUrl: './app/components/edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        user_service_1.UserService,
        forms_1.FormBuilder])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map