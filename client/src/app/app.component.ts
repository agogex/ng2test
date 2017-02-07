import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [
    UserService
  ]
})
export class AppComponent  {  }