import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourcesComponent } from './cources/cources.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { AngularComponent } from './cources/angular/angular.component';
import { JavascriptComponent } from './cources/javascript/javascript.component';
import { ReactComponent } from './cources/react/react.component';
import { FormsModule } from '@angular/forms';
import { PythonComponent } from './cources/python/python.component';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    AddnewuserComponent,
    AngularComponent,
    JavascriptComponent,
    ReactComponent,
    PythonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
