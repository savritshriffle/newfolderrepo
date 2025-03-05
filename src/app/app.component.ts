import { Component, ElementRef, Input, Output, ViewChild  } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

// @Output() collection='';

title = 'my-app';
//  currentitem="Book"
//  fruitsitem=["Apple" , "Banana" ,"Mango"]
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

constructor(public service : MyServiceService){
    console.log(service.getdata())
}

massage:string=""
getData(){
    this.massage=this.service.getdata()

}
@ViewChild('inputElement') inputel! : ElementRef

data:string=''

inputvalue(){
    this. data=this.inputel.nativeElement.value
    console.log(this.data)
}

@ViewChild('text') textel! : ElementRef

changecolor(){
    this.textel.nativeElement.style.color="red"
}

counter:number=1;
ngOnInit(){
    setInterval(()=>{
      this.counter++ 
    },2000)
}

ngData(){
    setInterval(()=>{
      this.counter++ 
    },2000)
}

ngDoCheck(){
    // console.log(this.counter)
    console.log("ngDocheck executed ")
}

 }
