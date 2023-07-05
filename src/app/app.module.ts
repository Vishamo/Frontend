import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GetrecordComponent } from './getrecord/getrecord.component';
import { FindrecordComponent } from './findrecord/findrecord.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    NavComponent,
    LoginComponent,
    GetrecordComponent,
    FindrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
