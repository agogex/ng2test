import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { CreateComponent } from './components/create.component';
import { EditComponent } from './components/edit.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routing)
  ],
  declarations: [
    AppComponent,
    UserComponent,
    CreateComponent,
    EditComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
