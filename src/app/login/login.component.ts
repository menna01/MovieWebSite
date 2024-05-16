import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authService:AuthService,private _router:Router){
    

  }

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
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)])

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
      this.isloadind=false;
      if(response.message==="success"){ //مسدج ديه جوا الاوبجكت نفسه
      

      localStorage.setItem('userToken',response.token);
      this._authService.saveUserData();
      this._router.navigate(['/home'])
      }
      else{
        this.error=response.message;

      }
      
    },
    error:(r)=>{console.log(r);
    
    }

  });

  


}





error:String='';
isloadind:boolean=false;

loginForm2:FormGroup= new FormGroup({
  first_name:new FormControl(null),
  last_name:new FormControl(null),
  age:new FormControl(null),
  email:new FormControl(null),
  password:new FormControl(null)

})

  

  


}
