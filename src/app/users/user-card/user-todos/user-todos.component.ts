import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {

  @Input()
  card: Todo | null = null;

  constructor() { }

  ngOnInit(): void {

  }

}
