import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-detail-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  constructor(private activedRoute:ActivatedRoute,private route:Router,private movieService:MovieService) { }
  movie:any;
  ngOnInit() {
    this.activedRoute.params.subscribe((params)=>{
      if(params["movieId"])
        this.getMovieDetailsById(params["movieId"])
    })
  }
  getMovieDetailsById(movieId:number){
    this.movieService.getMovieDetailsById(movieId).subscribe(response=>{
      console.log(response)
      this.movie = response;
      console.log(this.movie.runtime)
    })
  }
}
