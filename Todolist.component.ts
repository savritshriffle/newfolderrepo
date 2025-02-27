import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'to-do list',
    template: `<p></p>`,
    styles: ['li {color:red;}'],
})
export class ToDolist{
    names: string;
    age: number;
    contact: number;
    constructor(names:string , age: number, contact: number){
       this.names=names,
       this.age=age,
       this.contact=contact
    }
}