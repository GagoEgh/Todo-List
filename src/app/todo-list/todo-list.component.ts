import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { MyList } from '../models/myList';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = "Todo List";
  todos = new MyList<Todo>([
    {
      id: 1,
      title: 'Todo1',
    },
    {
      id: 2,
      title: 'Todo2',
    },
    {
      id: 3,
      title: 'Todo1',
    },
  ]);

  constructor(

  ) { }

  ngOnInit(): void {
    console.log(this.todos)
  }

}
