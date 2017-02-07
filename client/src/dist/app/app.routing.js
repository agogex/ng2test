"use strict";
var user_component_1 = require("./components/user.component");
var create_component_1 = require("./components/create.component");
var edit_component_1 = require("./components/edit.component");
exports.routing = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'users',
        component: user_component_1.UserComponent
    },
    {
        path: 'create',
        component: create_component_1.CreateComponent
    },
    {
        path: 'edit/:id',
        component: edit_component_1.EditComponent
    }
];
//# sourceMappingURL=app.routing.js.map