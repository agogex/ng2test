import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(users: User[], filterRole: string, filterGender: string, filterDirection: string) {
        let result;

        if (filterDirection === 'a-z') {
            users.sort((a, b) => {
                let x = a.firstName.toLowerCase(),
                    y = b.firstName.toLowerCase();

                return x > y ? 1 : x < y ? -1 : 0;
            });
        } else {
            users.sort((a, b) => {
                let x = a.firstName.toLowerCase(),
                    y = b.firstName.toLowerCase();

                return x > y ? -1 : x < y ? 1 : 0;
            });
        }


        if (filterRole === 'all') {
            result = users;
        } else {
            result = users.filter(user => {
                return user.role === filterRole;
            });
        }

        if (filterGender !== 'all') {
            result = result.filter(user => {
                return user.gender === filterGender;
            });
        }

        return result;
    }
}