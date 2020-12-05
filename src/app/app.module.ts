import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PeliculasService} from './services/peliculas.service';
@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService,
    HttpClient,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
