import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {
  /**
   *
   */

  trendingTV:any[]=[];
  constructor(private _moviesService:MoviesService) {
    
  }

 ngOnInit(): void {

  this._moviesService.getTv().subscribe({
    next:(res)=>{
     this.trendingTV=res.results;

    }
  })
   
 }


  text:string='';
  /**
   *
   */


}
