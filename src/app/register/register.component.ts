import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
// import { Router } from 'express';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  errormessage:string=``;
  constructor(private _authService:AuthService,private _router:Router){
    

  }

  ngOnInit(): void {
    
  }

registerForm:FormGroup= new FormGroup({
  name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z]/)]),
  passwordConfirm:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z]/)])

})


submitRegisterForm(registerForm:FormGroup){
  // console.log(registerForm.get('first_name'));
  // console.log(registerForm.get("first_name")?.errors);
  // console.log(registerForm.get("first_name")?.getError("required"));
  // console.log(registerForm.get("first_name")?.errors);

  this.isloadind=true;
  // console.log(registerForm.value)

  this._authService.signUp(registerForm.value).subscribe({
    next:(response)=>{
       //هنا بترجع الريسبونس نفسها
      // console.log(response);
      this.isloadind=false;
      if(response.status==="success"){
        this._authService.setRegisterStatus(true);

        localStorage.setItem('userToken',response.token);
        // this._authService.saveUserData();  
        this._router.navigate(['/login']); 
        // location.reload();     
        
        //مسدج ديه جوا الاوبجكت نفسه
       //navigate take array
      }
      else{
       
   

      }
      
    },
    error:(r)=>{
      console.log(r)
  
      Swal.fire({
        text:r.error.message,
        confirmButtonText:"okay",
       
   
      })
      
  
       
    
    }

  });

  


}





error:String='';
isloadind:boolean=false;

registerForm2:FormGroup= new FormGroup({
 name:new FormControl(null),
  email:new FormControl(null),
  password:new FormControl(null),
  password_Confirm:new FormControl(null)

})

  

  

}
