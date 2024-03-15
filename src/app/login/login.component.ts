// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  err: number = 0; // Define erreur variable

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next:(data)=>{
        let jwToken=data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error:(err:any)=>{
        this.err=1;
      }
    });  
  
  }

  
}
