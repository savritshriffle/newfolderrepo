import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SchoolModule } from './school/school.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { desh } from './dashboard/dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { CDirectiveDirective } from './c-directive.directive';
@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     HeaderComponent,
     FooterComponent,
     NewComponentComponent,
     ChildComponent,
     ParentComponent,
     CDirectiveDirective
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SchoolModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
