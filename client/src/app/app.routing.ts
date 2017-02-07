import { Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { CreateComponent } from './components/create.component';
import { EditComponent } from './components/edit.component';

export const routing: Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    }
]