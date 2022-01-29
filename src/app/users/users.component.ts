import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { MyList } from '../models/myList';
import { Todo } from '../models/todo';
import { User } from '../models/user.model';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users";

  constructor(
    public appService: AppServiceService,
  ) { }

  ngOnInit(): void {}


}
