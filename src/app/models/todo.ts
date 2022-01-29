import { IWithIdentity } from "./IwithIdentity";

export class Todo implements IWithIdentity {
    constructor(public id: number, public title: string) {
    }
}