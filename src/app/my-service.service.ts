import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  dashBoard: boolean = false ;
  Login(){
     this.dashBoard = true;
     alert("User is Valid")
  }
  
  // isAuth(){
  //   return this.dashBoard;
  // }
//  getdata(){
//    return "hello service"
//  }
//  getHome(){
//   return "Hello Home service"
//  }

    

}
