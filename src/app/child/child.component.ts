import { Component, Inject, Input, OnChanges, OnDestroy} from '@angular/core';
import { first } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnDestroy{

	@Input() Employee=[{
		firstName:"",
		lastName:"",
		contact:0,
		age:0
	}]
	massage: string = "child viewchild component";
	arr = [1,2,3,4,5,6,7];
	childInput:string="Input in child component";
	constructor() { }
	
    a=true;
	ngOnInit(){
		setTimeout(()=>{
			this.a = false
		},2000)
		console.log('Employee',this.Employee);
	}


	datachild(newstring:string){
		this.massage= newstring;

	}

	arrChildData(newarr:[]){
		this.arr = newarr;
	}

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
	
    @Input() image = 'ChildImage';

	ngOnDestroy(): void {
		console.log("ngOnDestroy")
	}
	
	

}
