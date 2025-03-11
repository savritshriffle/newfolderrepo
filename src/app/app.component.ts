import { Component, ElementRef, Input, Output, ViewChild ,AfterContentInit ,AfterContentChecked, AfterViewInit, AfterViewChecked, Inject} from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
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
    number$ = of(1,2,3);
    
    constructor(private service: MyServiceService , private route : Router){
        // this.number$.subscribe(value => console.log("Observable variable  =  "+ value))
        // this.number$.subscribe({
        //     next(value){ console.log("Observable next values = "+value+1)},
        //     error(err){ console.log("Internal Error "+err)},
        //     complete(){ console.log("observable task is completed")}
        
        // })
        // this.number$.subscribe({
        //     next(value){
        //         setTimeout(()=>{
        //             console.log(value)
        //         },2000)
        //     }
        // })
    }
    observarFun(Observ : Observer<number>){
        console.log(Observ)
        this.number$.subscribe({
            next(value){
                console.log(value)
            }
        })
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
    
    // dashBoard(){
    //  if(true){
    //  return this.route.navigate(['/desh'])
    //  }
    //  else{
    //   return  false
    //  }
    // }

    observable = new Observable((subscribe)=>{
        subscribe.next(1)
        subscribe.next(2)
        subscribe.next(3)
        subscribe.next(4)
        setTimeout(()=>{
            subscribe.next(5)
            subscribe.complete()
        },5000)
    })
    
}
