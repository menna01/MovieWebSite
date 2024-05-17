import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { log } from 'console';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  implements OnInit{

islogin:boolean=true;
logout:boolean=false;
isregisterd:boolean=true;


constructor(private _authService:AuthService){

}
  ngOnInit(): void {
    var token=localStorage.getItem("userToken");
    var data=localStorage.getItem('data');

    if(token){
      this.isregisterd=false
      console.log(token)
    }
    if(data){
      this.logout=true;
      this.islogin=false;
    }
  
    
   

    // this._authService.userData.subscribe({
    //   next:()=>{
    //     if(this._authService.userData.getValue != null){
    //       this.islogin=true;
    //     }
    //     else{
    //       this.islogin=false;
    //     }
    //   },
    //   error:()=>{}
      
    // })
    // if(this._authService.userData){
    //   this.islogin=true;

    // }
    // else{
    //   this.islogin=false;
    // }
    
  }

  signOut(){
    this._authService.signOut();
    this.logout=false;
  }

}
