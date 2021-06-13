import { HomeComponent } from './components/landing/home/home.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/landing/login/login.component';

const routes: Routes = [
  { path:"", redirectTo:"/landing/home", pathMatch:"full"},
  { path:"landing", component:LandingComponent, children:[
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
