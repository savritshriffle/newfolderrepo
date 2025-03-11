import { Component, ContentChild, ViewChild, AfterContentInit, ElementRef, OnInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements  AfterContentInit, OnInit{

    constructor(private route : ActivatedRoute) { }

    test = ''
    employeeData = [{firstName:" =   savri",lastName:" =  tambulkar" ,age:100, contact:123456}]
    ChangeString = "Child Data";
    imageInput: string = ''
    ImageData: boolean = true;
    Data: string = '';
    title: string = '';
    massage: string = '';
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
        
    }

}

