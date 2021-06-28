import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  filterText:string = "";
  movies:Movie[];
  constructor(private movieService:MovieService,public toastController: ToastController,private route:Router) { }

  ngOnInit() {
  }
  public search(){
    this.movieService.search(this.filterText).subscribe(response=>{
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
