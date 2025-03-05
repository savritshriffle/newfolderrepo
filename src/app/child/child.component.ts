import { Component, Input, OnChanges} from '@angular/core';
import { first } from 'rxjs';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{

	@Input() Employee=[{
		firstName:"",
		lastName:"",
		contact:0,
		age:0
	}]
	massage: string = "child viewchild component";

	constructor() { }
	

	ngOnInit(){
		console.log('Employee',this.Employee);
	}


	datachild(newstring:string){
		this.massage= newstring;

	}

	arr = [1,2,3,4,5,6,7];

	arrChildData(newarr:[]){
		this.arr = newarr;
	}


	childInput:string="Input in child component";
	inputData(input:string){
       this.childInput=input;
	}

	@Input() ChildChange:string=""
    //   counter:number=0;  

	ngOnChanges(changes : any): void {
		
		 this.ChildChange
		console.log("ngOnChanges",changes)
	}
	
    user:string='I am user'
	userdata(users:string){
		this.user=users
	}
	


}
