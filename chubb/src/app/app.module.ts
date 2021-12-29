
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationBar } from './navigationBar/navigationBar.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBar
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'', component: NavigationBar }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
