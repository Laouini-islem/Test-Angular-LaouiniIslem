import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddStageIngComponent } from './add-stage-ing/add-stage-ing.component';
import { StagesIngComponent } from './stages-ing/stages-ing.component';
import { DetailStageComponent } from './detail-stage/detail-stage.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    AddStageIngComponent,
    StagesIngComponent,
    DetailStageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
