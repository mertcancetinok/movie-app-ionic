import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private movieService:MovieService) { }
  movies:Movie[];
  ngOnInit() {
    this.getPopularMovies();
  }
  getPopularMovies(){
    this.movieService.getPopularMovies().subscribe(response=>{
      this.movies = response.results;      
    })
  }
  

}
