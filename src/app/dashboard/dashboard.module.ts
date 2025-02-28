import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { desh } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    desh
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    desh
  ]
})
export class DashboardModule { 
   
}