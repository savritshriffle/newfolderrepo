import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';




@Component({
  selector: "app-dashboard",
  templateUrl:`dashboard.component.html`,
  styleUrls: ["dashboard.component.css"]
})

export class desh {



  firstName = ' ';
  counter=100;
  lname!: string;
  inputType: string = 'text'

  name="savri";
  age=50;
  contact=12345;
  constructor(){

  }

// @Input() item='';
// @Input() fruits=['']

collection="Data01"

  counteradd():void{
   this.counter+=1
   this.lname = "fdfasfd"
   this.inputType = 'password'
  }

  counterless():void{
    this.counter-=1
    this.inputType = 'text'
  }

  
   data():void{
    console.log(this.name)
    console.log(this.age)
    console.log(this.contact)

    this.name='',
    this.age=0
    this.contact=0

    
   }
  //  @Output() look='';
    
   @Output() newItemevent= new EventEmitter<string>()

   addevent(value:string){
     this.newItemevent.emit("Click the btn");
   }
 
   @Output() newschool= new EventEmitter()
   
  mouse!: String;
  



}
   
