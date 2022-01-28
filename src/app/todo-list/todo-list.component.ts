import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { List } from '../app.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = "Todo List";
  constructor(
    public appService:AppServiceService 
  ) { }

  ngOnInit(): void {

  }

}
