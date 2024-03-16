import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user=new User();
  confirmPassword?:String;
  myForm!:FormGroup;
  err:any;
constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router){}
ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]]


});
}
onRegister(){
  console.log(this.user);

  this.authService.registerUser(this.user).subscribe({
    next:(res)=>{
      this.authService.setRegistredUser(this.user);
      alert("veiller confirmer votre email");
      this.router.navigate(['/verifEmail'])
     },
    error:(err:any)=>{
      if(err.status=400){
        this.err=err.error.message;
      }
    }
})
  
}
}
