import { Injectable } from '@angular/core';
import { MyList } from './models/myList';
import { Todo } from './models/todo';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  users = new MyList<User>([
    {
      id: 1,
      password:'User 1',
      email:'us1@sd.sd',
      firstName :'us1',
      lastName:'User 1',
      isActive:false,
      todoList: new MyList<Todo>([
        { id: 1, title: 'Todo item 1' },
        { id: 2, title: 'Todo item 2' },
      ]),
    },
    {
      id: 2,
      email:'us2@sd.sd',
      password:'User 2',
      firstName :'us2',
      lastName:'User 2',
      isActive:false,
      todoList: new MyList<Todo>(),
    },
    {
      id: 3,
      email:'us3@sd.sd',
      password:'User 3',
      firstName :'us3',
      lastName:'User 3',
      isActive:false,
      todoList: new MyList<Todo>([{ id: 3, title: 'Todo item 3' }]),
    },
  ]);
  constructor() {

  }
}
