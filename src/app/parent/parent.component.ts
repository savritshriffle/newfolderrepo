import { Component} from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  constructor() { }
  test = ''
  employeeData=[{firstName:" =   savri",lastName:" =  tambulkar" ,age:100, contact:123456}]
      

}
