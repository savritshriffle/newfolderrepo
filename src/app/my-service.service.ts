import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

 getdata(){
   return "hello service"
 }
 getHome(){
  return "Hello Home service"
 }



}
