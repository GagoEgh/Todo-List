import { Component, Input, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User = {} as User;
  @Input()
  search: string = '';
  constructor(public appService:AppServiceService) { }
  ngOnInit(): void { }

  public showList(user: any): void {
    this.user!.isActive = !this.user!.isActive;
  }

}
