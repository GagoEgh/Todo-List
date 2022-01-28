import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { List, User } from '../app.interface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users";

  constructor(
    public appService:AppServiceService
  ) { }

  ngOnInit(): void {
   this.appService.createUsers();
  }

  public showList(item:User){
    item.isShow = !item.isShow;
  }

  
}
