import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';

import { UserTodosComponent } from './users/user-card/user-todos/user-todos.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SetTimeDirective } from './set-time.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    TodoListComponent,
    HeaderComponent,
    UserCardComponent,
    UserTodosComponent,
    BackgroundColorDirective,
    SetTimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
