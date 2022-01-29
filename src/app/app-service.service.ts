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
      name: 'User 1',
      isActive:false,
      todoList: new MyList<Todo>([
        { id: 1, title: 'Todo item 1' },
        { id: 2, title: 'Todo item 2' },
      ]),
    },
    {
      id: 2,
      name: 'User 2',
      isActive:false,
      todoList: new MyList<Todo>(),
    },
    {
      id: 3,
      name: 'User 3',
      isActive:false,
      todoList: new MyList<Todo>([{ id: 3, title: 'Todo item 3' }]),
    },
  ]);
  constructor() {

  }
}
