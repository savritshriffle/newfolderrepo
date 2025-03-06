import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { desh } from './dashboard/dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { MyServiceService } from './my-service.service';
const routes: Routes = [
  {path:'desh' , component:desh ,
    children:[
    {path:'parent', component:ParentComponent},
    {path:'services', component:MyServiceService}
  ]},
  { path: 'public', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
