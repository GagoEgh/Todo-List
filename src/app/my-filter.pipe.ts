import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(user: User, name:string): any {
    if(user.lastName === name || user.firstName === name ||
       user.email === name ||user.password == name || user.id === +name){
      return `${user?.id}-${user?.firstName} Total todo items:${user?.todoList?.values?.length}`
    }
  }

}
