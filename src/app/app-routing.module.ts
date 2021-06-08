import { HomeComponent } from './components/landing/home/home.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", redirectTo:"/landing/home", pathMatch:"full"},
  { path:"landing", component:LandingComponent, children:[
    {path:"home", component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
