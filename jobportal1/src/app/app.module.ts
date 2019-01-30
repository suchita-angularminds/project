import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegformComponent } from './regform/regform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginformComponent } from './loginform/loginform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {RegistrationService} from './registration.service';
import {StatelistService} from './statelist.service';
import {LoginService} from './login.service';
import {HttpClientModule} from  '@angular/common/http';
import { BsDatepickerModule  } from 'ngx-bootstrap/datepicker';
import {NgxMaskModule} from 'ngx-mask';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

import{UniqueemailcheckService} from './uniqueemailcheck.service';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent,
    DashboardComponent,
    LoginformComponent,
    HomepageComponent,
    FileSelectDirective,
    ForgotpasswordComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      }
    ]),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot( ),
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
   
 
  ],
  providers: [RegistrationService,StatelistService,LoginService,AuthGuard,UniqueemailcheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
