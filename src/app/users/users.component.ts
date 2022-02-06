import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users";
  search:string = '';
  constructor(
    public appService: AppServiceService,
  ) { }

  ngOnInit(): void { }

  public onChenge(event:any) {
    this.search = event.target.value;
  }

}
