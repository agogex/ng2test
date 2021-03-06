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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = '/api/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.apiUrl, user)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.apiUrl + "/" + id, user)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.checkEmail = function (email) {
        return this.http.get(this.apiUrl + "/email/" + email)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandle);
    };
    UserService.prototype.errorHandle = function (err) {
        return Observable_1.Observable.throw(err.json());
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map