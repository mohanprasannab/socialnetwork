import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { AddpostComponent } from './home/addpost/addpost.component';
import { ReadpostComponent } from './home/readpost/readpost.component';
import { UserdetailsComponent } from './home/userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AddpostComponent,
    ReadpostComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
