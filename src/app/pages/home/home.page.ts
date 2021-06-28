import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private movieService:MovieService,private route:Router) { }
  movies:Movie[];
  ngOnInit() {
    this.getPopularMovies();
  }
  getPopularMovies(){
    this.movieService.getPopularMovies().subscribe(response=>{
      this.movies = response.results;      
    })
  }
  getDetails(event){
    const movieId = event.target.parentNode.id;
    if(movieId.length!=0){
      this.route.navigate(['movie-details',{movieId:movieId}])
    }
    
  }

}
