import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent {

  public movie:Movie;

  constructor(private route:ActivatedRoute, private moviesService:MoviesService, private _location: Location) { 
    const id = this.route.snapshot.paramMap.get("id");
    this.getMovieById(id);
  }


  getMovieById(movie_id:string) {
    this.moviesService.getMovieById(movie_id).subscribe((data:Movie)=>{
      this.movie = data;
      console.log(this.movie);
    })
  }

  return(){
    this._location.back();
  }

}
