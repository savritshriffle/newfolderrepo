import { Component, ContentChild, ViewChild, AfterContentInit, ElementRef, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ActivatedRoute } from '@angular/router';
import { of, forkJoin, from, throwError,  mergeMap,  first, last, Subject, map, filter } from 'rxjs';
import { __values } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements  AfterContentInit, OnInit {

    constructor(private route : ActivatedRoute) { }

    test = ''
    employeeData = [{firstName:" =   savri",lastName:" =  tambulkar" ,age:100, contact:123456}]
    ChangeString = "Child Data";
    imageInput: string = ''
    ImageData: boolean = true;
    Data: string = '';
    title: string = '';
    massage: string = '';
    oprator = of([1,2,3,4],"Hello", "User", {
        name : 'firstName',
        age: 10,
    }
    )
    fromOprator = from([1,2,3,4,5,6,7,8,"hello" ,{
        name: "firstName",
        age: 10
    }])

    array = "string"
    fromExample = from(this.array)
    var1 = {
        name : "firstName",
        age : 10
    }
    var2 = [9, '6', 7, 0]
    var3 = [11, 12, 13]
    forkJoinExample = forkJoin(this.var1.name , this.var2, )
    throwerr = throwError(["Internal error"])
    margeMapExample = of([1, 2, 3, 4, 5])
    margeMapExample2 = of('a', 'b', 'c', 'd')
    margeMapExample3 = of('1', '2', '3', '4')
    counter = new BehaviorSubject(0)
    number = new Subject<number>()
    initialString = new BehaviorSubject([4, 5, 3, 7, 6, 2, 1,{
        name : "studentName",
        age : 99
    }])
    behaviorSub = new BehaviorSubject<any>(of([1,2,3,4,5]))
    @ViewChild(ChildComponent) childel!: ChildComponent
    childdata(){
        this.childel.datachild("data change by parent component")
    }

    @ViewChild(ChildComponent) arrelement!:ChildComponent
    arrdata(){
        let ardata = this.arrelement.arrChildData([])
        console.log(ardata)
    }

    @ViewChild(ChildComponent) inputele!: ChildComponent;
    inputData(){
        let Input=this.inputele.inputData("Parent Change Input Text")
        console.log(Input)
    }
 
    Clickparent(){
        this.ChangeString= "Parent Change Child Data";
    }

    @ContentChild(ChildComponent) userel! : ChildComponent;
    ngAfterContentInit(): void {
    console.log("Parent ngAfterContent")
    }

    imageAdd(){
        this.imageInput = 'Image Change by parent';
    }

    imageDistroy(){
        this.ImageData = false; 
    }
    @ViewChild('divEl') element! : ElementRef ;
    changeEl(){
       this.Data = this.element.nativeElement.style.color="green"
       console.log(this.Data)
    }
    ngOnInit(): void {
        this.title = this.route.snapshot.data['massage'] 
        this.massage = this.route.snapshot.data['title']
        console.log(this.route.snapshot)
        this.title = this.route.snapshot.queryParams['title']
        this.massage = this.route.snapshot.queryParams['massage']
        console.log(this.route.snapshot.queryParams)
        console.log(this.route.snapshot.fragment)   
        
        // this.obj.subscribe((value)=>{
        //      console.log(value)
           
        // })
        
        this.oprator.subscribe((value:any)=>{
            console.log(value.age)
            console.log(value.name)
            console.log()
        })
        this.oprator.pipe(
            // first()
            last()
        ).subscribe((value)=>{
            console.log(value)
        })

        

        this.fromOprator.pipe(first()).subscribe((value)=>{
            console.log(value)
        })
    //     this.fromExample.subscribe((value)=>{
    //         console.log(value)
    //     })
    //     this.forkJoinExample.subscribe((value)=>{
    //         console.log(value)
    //     })
        this.throwerr.subscribe()
        this.margeMapExample.pipe(
            mergeMap(val => {
                console.log(val)
                return this.margeMapExample2
            })
        ).subscribe((value)=>{
            console.log(value)
        })
    // }
    // obj = new Observable((observer)=>{
    //     console.log("Observable.")
    //     let value = [1,2,3,4,5,6,7,8,9,0]
    //     observer.next(value)
    //     setTimeout(()=>{
    //         observer.next('a')
    //     },5000)
    //     setTimeout(()=>{
    //         observer.next('b')
    //     },4000)
    //     // observer.next('b')
    //     // observer.next('d')
    //     setTimeout(()=>{
    //         observer.complete()
    //         console.log("Task is completed ")    
    //     },4500)
    //     console.log(observer.unsubscribe)
        // observer.error()
        
        // value.filter((val)=>{
        //     if(val<=5){
        //         console.log("task is completed = "+val)
        //         observer.complete()
        //     }
        // })
    // })
    
    
    // Observ(){
    //    this.obj.subscribe((value)=>{
    //         console.log(value)
           
    //     })

   // }
    // this.number.subscribe((value)=>{
    //     setInterval(() => {
    //         console.log(value)
    //     }, 2000);
    // })

    this.initialString.pipe(
        map(m => console.log(m.sort()))
    ).subscribe(()=>{})

    console.log(this.behaviorSub.value.subscribe())

    this.oprator.pipe()

}
    // Increment(){
    //     setInterval(()=>{
    //         console.log(this.counter.value+1)
    //     },2000)
    // }
}


