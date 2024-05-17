import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {
  favoriteMovies: any[] = [];
  imgprefix:string='https://image.tmdb.org/t/p/w500';


  constructor(private _movieService:MoviesService) {}

  ngOnInit(): void {
    this.favoriteMovies = this._movieService.getWatchlist();
    console.log(this.favoriteMovies)
  }
  removeFromFavorites(movie: any): void {
    this._movieService.removeMovie(movie);
    this.favoriteMovies = this._movieService.getWatchlist(); // Update the local array to reflect the change
  }
}
