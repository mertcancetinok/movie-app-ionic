import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {
  movies:Movie[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.upComing();  
  }
  upComing(){
    this.movieService.upComing().subscribe(response=>{
        this.movies = response.results;
        console.log(this.movies)
      })
  }
}
