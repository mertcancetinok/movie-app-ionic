import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { MovieDetail } from '../models/movie-detail-model';
import { ResponseModel } from '../models/response-model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getPopularMovies(){
    return this.httpClient.get<ResponseModel>(`${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`);

  }
  search(search:string){
    return this.httpClient.get<ResponseModel>(`${environment.apiUrl}/search/movie?api_key=${environment.apiKey}&query=${search}`);
  }
  upComing(){
    return this.httpClient.get<ResponseModel>(`${environment.apiUrl}/movie/upcoming?api_key=${environment.apiKey}`);
  }
  getMovieDetailsById(movieId:number){
    return this.httpClient.get(`${environment.apiUrl}/movie/${movieId}?api_key=${environment.apiKey}`);
  }
}
