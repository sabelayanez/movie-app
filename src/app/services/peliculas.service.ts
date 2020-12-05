import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  searchUrl  = 'https://api.themoviedb.org/3/search/movie';
  apiKey     = '6a54634a0e5137683c5d79bc11c7a008';
  language   = 'es-ES';

  constructor(private http:HttpClient) { }

//https://api.themoviedb.org/3/search/movie?api_key=6a54634a0e5137683c5d79bc11c7a008&language=es-ES&query=Frozen
  getMovieByQuery(query:string){
    let params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.apiKey);
    params.set('language', this.language);
    params.set('query',query);
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
}
