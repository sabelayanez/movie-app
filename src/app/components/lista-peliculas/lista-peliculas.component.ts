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
  public searchQuery:string;
  constructor(private peliculasService:PeliculasService) {
   
  }

  ngOnInit(): void {
  }

  getPeliculas(query:string){
    this.peliculasService.getMovieByQuery(query).subscribe((data:any)=>{
      console.log(data.results)
      this.peliculas = data.results;
    });
  }
  
  onCancel(){
    this.peliculas = [];
  }

}
