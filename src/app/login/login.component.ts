import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authService:AuthService,private _router:Router){
    

  }

  error:string='';
  isloadind:boolean=false;
  
  isloged:boolean=false;
  
  loginForm2:FormGroup= new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
  
  })
  
  ngOnInit(): void {
    // this._authService.userData.subscribe({
    //   next:()=>{

    //     if(this._authService.userData.getValue() != null){
    //       this._router.navigate(['home']);
    //     }
    //   }
    // })
    
  }

loginForm:FormGroup= new FormGroup({
 
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z]/)])

})


submitLoginForm(loginForm:FormGroup){
  // console.log(registerForm.get('first_name'));
  // console.log(registerForm.get("first_name")?.errors);
  // console.log(registerForm.get("first_name")?.getError("required"));
  // console.log(loginForm.get("first_name")?.errors);

  this.isloadind=true;

  this._authService.signin(loginForm.value).subscribe({
    next:(response)=>{ //هنا بترجع الريسبونس نفسها
      console.log(response);
      // this.isloadind=false;
      if(response.status==="success"){ //مسدج ديه جوا الاوبجكت نفسه
      console.log(response)


      localStorage.setItem('data','success');
      this._authService.saveUserData();        

      this._router.navigate(['/home']);
      }
      else{
        this.error=response.message;
       

      }
      
    },
    error:(r)=>{
      this.isloadind=false;

      Swal.fire({
        text:r.error.message,
        confirmButtonText:"okay",
       
   
      })
    }

  });

  


}





  

  


}
