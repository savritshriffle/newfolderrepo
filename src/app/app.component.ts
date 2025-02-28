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
  item=["apple" , "book", "cat", "dog"]

  additem(item:string):void{
    // this.item.push("Elephand")
    // this.item.push("aaaaa")
   } 



//  mouseclick="Hello I m mouse"
 
}
