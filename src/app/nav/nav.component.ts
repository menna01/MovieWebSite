import { Component, OnChanges, OnInit, input } from '@angular/core';
import { AuthService } from '../auth.service';
import { log } from 'console';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  implements OnInit{

// islogin:boolean=true;
// logout:boolean=false;
// isregisterd:boolean=true;

isLoggedIn = false;
isRigestred = false;

constructor(private _authService:AuthService){
  

}

  ngOnInit(): void {
    this._authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      this.isRigestred=true;

      console.log(this.isLoggedIn)
    });
    this._authService.isRigestred().subscribe(registred => {
      this.isRigestred = registred;
      
      console.log(this.isRigestred)
    });
    var token=localStorage.getItem('userToken');



    console.log("the tokeeeeeen is ",token);
    var data=localStorage.getItem('data');

    // if(token){
    //   this.isregisterd=false
    //   console.log(token)
    // }
    // if(data){
    //   this.logout=true;
    //   this.islogin=false;
    // }
  
    
   

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
    this.isLoggedIn=false;
    this.isRigestred=false;
    // this.logout=false;
    // location.reload();
  }

}
