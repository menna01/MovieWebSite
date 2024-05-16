import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent  implements OnInit{
  trendingPeople:any[]=[];
  term:string=``;
  /**
   *
   */
  constructor(private _movieservice:MoviesService) {
    
  }


  ngOnInit(): void {
    this._movieservice.getPeople().subscribe({
      next:(res)=>{
        this.trendingPeople=res.results;
        console.log(this.trendingPeople)

        
      }
    })
    
  }

}
