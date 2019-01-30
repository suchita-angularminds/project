import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform/regform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component:  HomepageComponent},
  { path: 'registerform', component: RegformComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'dashboard', component: DashboardComponent ,  canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'newpassword/:email', component: NewpasswordComponent },
 
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
