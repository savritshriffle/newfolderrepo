import { Component, ElementRef, Input, Output, ViewChild ,AfterContentInit ,AfterContentChecked, AfterViewInit, AfterViewChecked, Inject} from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentChecked , AfterContentInit, AfterViewInit, AfterViewChecked {

    // @Output() collection='';

        title = 'my-app';
    //  currentitem="Book"
    //  fruitsitem=["Apple" , "Banana" ,"Mango"]
    //  items=["apple" , "book", "cat", "dog"]
    childcomponent = "student"
    lastnames = "studentlastname"
    childdata:string = ''
    userfirstname = "savritambulkar"
    userdata={userid:101,username:"student", userpost:"HR"}
    arr=[1,2,3,4,5]
    massage:string = "";
    data:string = ''
    
    constructor(public service: MyServiceService){
        // console.log(service)
        // console.log(service.getdata());
        // console.log(service.getHome());
        console.log(service.Login())
    }
    
   
    // private service = Inject(MyServiceService)
    // getService(){
    //   console.log(this.service.getHome)
    // }
    additem(item:string):void{
        // this.item.push("Elephand")
        // this.item.push("aaaaa")
    } 
    
    person={
        firstName: "savri",
        lastName: "tam"
    }

    childData(child:string){
        this.childdata=child
    }

    // getData(){
    //     this.massage=this.service.getdata();

    // }
    @ViewChild('inputElement') inputEl! : ElementRef;
    inputvalue(){
        this.data = this.inputEl.nativeElement.value;
        console.log(this.data)
    }

    @ViewChild('text') textel! : ElementRef
    changecolor(){
        this.textel.nativeElement.style.color="red"
    }

    //counter:number=1;
    // ngOnInit(){
    //     setInterval(()=>{
    //       this.counter++ 
    //     },2000)
    // }

    // ngData(){
    //     setInterval(()=>{
    //       this.counter++ 
    //     },2000)
    // }

    ngDoCheck(){
        // console.log(this.counter)
        console.log("ngDocheck executed ")
    }
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit ")
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked")
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit")
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked")
    }
    
    DashBoard(){
        if(this.service.dashBoard){
            confirm("Access Dashboard")
        }
        else{
            this.DashBoard 
        }
    }
    
}
