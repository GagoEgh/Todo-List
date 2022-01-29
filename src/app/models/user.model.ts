import { IWithIdentity } from "./IwithIdentity";
import { MyList } from "./myList";
import { Todo } from "./todo";

  
export class User implements IWithIdentity {
    constructor(
      public id: number,
      public name: string,
      public isActive:boolean,
      public todoList: MyList<Todo>
    ) {}
    
}
  
