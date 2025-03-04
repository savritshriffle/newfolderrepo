import { Component, Input } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Input() Employee=[{
    firstName:"",
    lastName:"",
    contact:0,
    age:0
  }]
  ngOnInit(){
    console.log('Employee',this.Employee);
  }
}
