import { Component, ContentChild, ElementRef, Input, ViewChild ,AfterContentInit} from '@angular/core';
import { concat } from 'rxjs';
import { ChildComponent } from '../child/child.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements  AfterContentInit{

constructor() { }
 
    test = ''
employeeData=[{firstName:" =   savri",lastName:" =  tambulkar" ,age:100, contact:123456}]
  

@ViewChild(ChildComponent) childel!: ChildComponent
    childdata(){
      this.childel.datachild("data change by parent component")
    }


@ViewChild(ChildComponent) arrelement!:ChildComponent
    arrdata(){
        let ardata=this.arrelement.arrChildData([])
        console.log(ardata)
    }


@ViewChild(ChildComponent) inputele!: ChildComponent;
    inputData(){
        let Input=this.inputele.inputData("Parent Change Input Text")
        console.log(Input)
    }
    
    ChangeString="Child Data"
    Clickparent(){
        this.ChangeString= "Parent Change Child Data"
    }
  
@ContentChild(ChildComponent) userel! : ChildComponent;
ngAfterContentInit(): void {
   console.log("Parent ngAfterContent")
}

}

