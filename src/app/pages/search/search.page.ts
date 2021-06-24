import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  filterText:string = "";
  movies:Movie[];
  constructor(private movieService:MovieService,public toastController: ToastController) { }

  ngOnInit() {
  }
  public search(){
    this.movieService.search(this.filterText).subscribe(response=>{
        this.movies = response.results;
    })
  }
}
