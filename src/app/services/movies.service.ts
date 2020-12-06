import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  searchUrl  = 'https://api.themoviedb.org/3/search/movie';
  detailUrl  = 'https://api.themoviedb.org/3/movie/';
  apiKey     = '6a54634a0e5137683c5d79bc11c7a008';
  language   = 'es-ES';

  constructor(private http:HttpClient) { }

  getMovieByQuery(query:string){
    const headers = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    };
    return this.http.get(this.searchUrl, {
      params:{
        api_key: this.apiKey,
        language: this.language,
        query:query
      }
    });
  }

  getMovieById(movie_id:string){
    const headers = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    };
    return this.http.get(this.detailUrl + movie_id, {
      params:{
        api_key: this.apiKey,
        language: this.language,
      }
    });
  }
}
