import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConstants } from '../app.constants';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  searchUrl  = AppConstants.BASE_URL + 'search/movie';
  detailUrl  = AppConstants.BASE_URL + 'movie/';

  constructor(private http:HttpClient) { }

  getMovieByQuery(query:string){
    const headers = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    };
    return this.http.get(this.searchUrl, {
      params:{
        api_key: AppConstants.API_KEY,
        language: AppConstants.LANGUAGE,
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
        api_key: AppConstants.API_KEY,
        language: AppConstants.LANGUAGE,
      }
    });
  }
}
