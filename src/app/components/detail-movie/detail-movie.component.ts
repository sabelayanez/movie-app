import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movie:Movie;

  constructor(private route:ActivatedRoute, private moviesService:MoviesService) { 
    const id = route.snapshot.paramMap.get("id");
    this.getMovieById(id);
  }

  ngOnInit(): void {
  }

  getMovieById(movie_id:string) {
    this.moviesService.getMovieById(movie_id).subscribe((data:Movie)=>{
      this.movie = data;
      console.log(this.movie);
    })
  }

}
