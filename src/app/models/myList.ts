import { IWithIdentity } from "./IwithIdentity";

export class MyList<T extends IWithIdentity> {
    public values: T[];
  
    constructor(initialData?: T[]) {
      this.values = initialData || [];
    }
}