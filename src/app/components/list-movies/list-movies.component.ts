import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public movies: Movie[] = [];
  public searchQuery:string;
  constructor(private moviesService:MoviesService) {
   
  }

  ngOnInit(): void {
  }

  getmovies(query:string){
    this.moviesService.getMovieByQuery(query).subscribe((data:any)=>{
      console.log(data.results)
      this.movies = data.results;
    });
  }
  
  onCancel(){
    this.movies = [];
  }

}
