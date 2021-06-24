import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response-model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getPopularMovies(){
  return this.httpClient.get<ResponseModel>("https://api.themoviedb.org/3/movie/popular?api_key=a4a6a7f229b3b1f8b97a04c81ed10360");
  }
  search(search:string){
    return this.httpClient.get<ResponseModel>("https://api.themoviedb.org/3/search/movie/?api_key=a4a6a7f229b3b1f8b97a04c81ed10360&query="+search);
  }
}
