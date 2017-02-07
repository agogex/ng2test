"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (users, filterRole, filterGender, filterDirection) {
        var result;
        if (filterDirection === 'a-z') {
            users.sort(function (a, b) {
                var x = a.firstName.toLowerCase(), y = b.firstName.toLowerCase();
                return x > y ? 1 : x < y ? -1 : 0;
            });
        }
        else {
            users.sort(function (a, b) {
                var x = a.firstName.toLowerCase(), y = b.firstName.toLowerCase();
                return x > y ? -1 : x < y ? 1 : 0;
            });
        }
        if (filterRole === 'all') {
            result = users;
        }
        else {
            result = users.filter(function (user) {
                return user.role === filterRole;
            });
        }
        if (filterGender !== 'all') {
            result = result.filter(function (user) {
                return user.gender === filterGender;
            });
        }
        return result;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map