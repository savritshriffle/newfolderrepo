import { Component, Input, Output  } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// @Output() collection='';

  title = 'my-app';
  // currentitem="Book"
  // fruitsitem=["Apple" , "Banana" ,"Mango"]
  items=["apple" , "book", "cat", "dog"]

  additem(item:string):void{
    // this.item.push("Elephand")
    // this.item.push("aaaaa")
   } 
 
   childcomponent="student"
  lastnames="studentlastname"

  childdata:string=''

  childData(child:string){
    this.childdata=child
  }
 userfirstname="savritambulkar"

 userdata={userid:101,username:"student", userpost:"HR"}


  person={
  firstName:"savri",
  lastName:"tam"
 }


 arr=[1,2,3,4,5]
 
 
 
}
