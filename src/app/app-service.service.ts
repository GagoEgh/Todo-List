import { Injectable } from '@angular/core';
import { List, User } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private list: List[] = [];
  users: User[] = [];
  todo:List [] = [];
  constructor() {
    this.createList(this.todo)
   }

  public createUsers(): void {
    this.createList(this.list,'item');
    if (this.list.length === 0 || this.users.length === 0) {
      for (let i = 1; i < 7; i++) {
        this.users?.push({
          id: i,
          name: `User ${i}`,
          isShow: false,
          list: this.list
        })
      }
    }
  }

  private createList(list:List[],str?:string): void {
    if (list.length === 0) {
      for (let i = 1; i < 7; i++) {
        list.push({
          id: i,
          title: `Todo ${str} ${i}`
        })
      }
    }
  }
}
