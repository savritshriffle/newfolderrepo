import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { desh } from './dashboard/dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
  {
    path:'desh' , 
    component:desh , 
    canActivate: [AuthGuard], 
    canDeactivate: [AuthGuard],
    children: [
      { 
        path: 'child', 
        component: ChildComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
      }
    ]
  },
  {
    path:'parent', 
    component:ParentComponent, 
    // canActivate: [AuthGuard], 
    // canDeactivate: [AuthGuard],
    data:{
      title:"title is parent component",
      massage:"parent component static route",
    }
    
    
  },
  
  // {path:'services', component:MyServiceService}
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
