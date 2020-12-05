import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss']
})
export class ListaPeliculasComponent implements OnInit {

  public peliculas: Movie[] = [];
  constructor(private peliculasService:PeliculasService) {
    this.getPeliculas('frozen');

   }

  ngOnInit(): void {
  }

  getPeliculas(query:string){
    this.peliculasService.getMovieByQuery(query).subscribe((data:any)=>{
      this.peliculas = data.results;
    });
  }


}
