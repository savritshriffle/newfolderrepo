import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { desh } from './dashboard/dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { MyServiceService } from './my-service.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'desh' , component:desh },
  {path:'parent', component:ParentComponent},
  {path:'services', component:MyServiceService}
  //   children:[
  //   {path:'parent', component:ParentComponent},
  //   {path:'services', component:MyServiceService}
  // ]},
  // { path: 'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
