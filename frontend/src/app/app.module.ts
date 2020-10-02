import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrilhasComponent } from './components/trilhas/trilhas.component';
import { TrilhaComponent } from './components/trilha/trilha.component';
import { RegionComponent } from './components/region/region.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { TrilhaService } from './trilha.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrilhasComponent,
    TrilhaComponent,
    RegionComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],
  providers: [TrilhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
