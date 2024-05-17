import { Component, OnInit ,Input} from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  trendingMovies:any[]=[]
  term:string=``;

  /**
   *
   */
  constructor(private _moviesservice:MoviesService) {
    
  }

  ngOnInit(): void {
    this._moviesservice.getMovies("movie").subscribe({
      next:(res)=>{
        this.trendingMovies=res.results;

        
      }
    })
    
    
  }
}
