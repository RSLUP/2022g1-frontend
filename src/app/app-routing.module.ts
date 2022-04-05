import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
