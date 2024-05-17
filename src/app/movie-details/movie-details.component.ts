import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
   itemDetails:any;
   similarMovie:any;
   tv:boolean=false;
   sim:boolean=true;
   mediaT:string='';
   imgprefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _activatedRoute:ActivatedRoute , private _moviceService:MoviesService){    
    let {id,media_type}= this._activatedRoute.snapshot.params;
    this.mediaT=id;


    
    this._moviceService.getMovieDetails(media_type,id).subscribe({
     next:(res)=>{
       this.itemDetails=res;
       console.log(id,media_type)
       console.log(this.itemDetails)
       
 
 
 
     }
    });


  
    this._moviceService.getSimilar(id,media_type).subscribe({
      
      next:(res)=>{
        if(id=='tv'){
          this.tv=true;
          this.sim=false;
        }
        console.log(this.mediaT)
   
        this.similarMovie=res.results
       console.log(this.similarMovie);
      }
    })

  
   
  }

  ngOnInit(): void {

  }
  
  getSimilar(id:string,media_type:string){
    this._moviceService.getMovieDetails(media_type,id).subscribe({
      next:(res)=>{
     
        this.itemDetails=res;
  
  
  
      }
     });
    this._moviceService.getSimilar(id,media_type).subscribe({
      next:(res)=>{ 
        console.log("hello")
     
        this.similarMovie=res.results
       console.log(this.similarMovie);
      }
    })

  }

}
