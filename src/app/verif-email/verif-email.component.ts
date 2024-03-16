import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User.model';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrls: ['./verif-email.component.css']
})
export class VerifEmailComponent implements OnInit{
  code:string="";
  user:User=new User();
  err="";
constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
    this.user=this.authService.regitredUser;
}
onValidateEmail() {
  this.authService.validateEmail(this.code).subscribe({
    next: (res) => {
      alert('Login successful');
      this.authService.login(this.user).subscribe({
        next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.log("Error during login:", err);
        }
      });
    },
    error: (err: any) => {
      if ((err.error.errorCode=="invalid_Token")) 
        this.err = "Votre code n'est pas Valide !";
      
      if ((err.error.errorCode=="Expired_Token")) 
        this.err = "Votre code a expire !";
      
       }
  });
}
}
