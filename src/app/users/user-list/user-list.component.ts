import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  user: User| null = null;

  constructor() { }

  ngOnInit(): void {}

  public showList(user:any):void{
    this.user!.isActive = !this.user!.isActive ;
  }

}
