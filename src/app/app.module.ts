import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SchoolModule } from './school/school.module';
import { CollageModule } from './collage/collage.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { StudentComponent } from './new-folder/student/student.component';
import { desh } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     HeaderComponent,
     FooterComponent,
     NewComponentComponent,
     StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SchoolModule,
    CollageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
