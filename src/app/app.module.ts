import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesService} from './services/movies.service';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { HeaderComponent } from './components/includes/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    DetailMovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    moviesService,
    HttpClient,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
