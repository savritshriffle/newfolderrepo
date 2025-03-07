import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { desh } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    desh
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    desh
  ]
})
export class DashboardModule { 
   
}