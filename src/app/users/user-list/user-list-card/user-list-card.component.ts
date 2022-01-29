import { Component, Input, OnInit } from '@angular/core';
import { MyList } from 'src/app/models/myList';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.css']
})
export class UserListCardComponent implements OnInit {

  @Input()
  card: Todo | null = null;

  constructor() { }

  ngOnInit(): void {

  }

}
