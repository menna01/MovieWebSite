import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

     getMovieDetails(id:string,media_type:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=95ce63358444b9d594af368525e28aba
  `);
  
}





  getMovies(m:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${m}/day?api_key=95ce63358444b9d594af368525e28aba
    `);


  }
  getTv():Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=95ce63358444b9d594af368525e28aba
    `);


  }

  getPeople():Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/person/day?api_key=95ce63358444b9d594af368525e28aba
    `);


  }



  getSimilar(id:string,media_type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${id}/${media_type}/similar?api_key=95ce63358444b9d594af368525e28aba
    `);
  }
}
