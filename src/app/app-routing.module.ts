import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';


const routes: Routes = [
  { path: 'detail/:id', component: DetailMovieComponent },
  { path: '**', component: ListMoviesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
