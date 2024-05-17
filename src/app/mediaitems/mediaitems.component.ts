import { Component, Input } from '@angular/core';

import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-mediaitems',
  templateUrl: './mediaitems.component.html',
  styleUrl: './mediaitems.component.css'
})
export class MediaitemsComponent {

  @Input() Movie:any;
  @Input() Movie2:any;
  

  imgprefix:string='https://image.tmdb.org/t/p/w500';

  /**
   *
   */
  constructor(private _movieservice:MoviesService) {
  
    
  }
  addToFavorites(movie: any): void {
    this._movieservice.addwatchlist(movie);
  }

  add(): void {
console.log("helo")  }


}
