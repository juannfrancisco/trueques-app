import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { HomeComponent } from './components/landing/home/home.component';
import { LoginComponent } from './components/landing/login/login.component';
import { RegisterComponent } from './components/landing/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
