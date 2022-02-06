import { IWithIdentity } from "./IwithIdentity";
import { MyList } from "./myList";
import { Todo } from "./todo";

  
export class User implements IWithIdentity {
    constructor(
      public id: number,
      public password: string,
      public email:string,
      public  firstName :string,
      public lastName:string,
      public isActive:boolean,
      public todoList?: MyList<Todo>
    ) {}
    
}
  
