// AuthService
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/User.model';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // users: User[] = [
  //   { username: "admin", password: "123", roles: ["ADMIN"] },
  //   { username: "ghaith", password: "123456", roles: ["USER"] }
  // ];
  public loggedUser: string = '';
  public isloggedIn: boolean = false;
  public roles: string[] = [];
  apiURL:string='http://localhost:8089/users';
  token!:string;
  private helper =new JwtHelperService();
  constructor(private router: Router,private http:HttpClient) { }

  login(user:User){
    return this.http.post<User>(this.apiURL+'/login',user,{observe:'response'});
  }
  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token=jwt;
    this.isloggedIn=true;
    this.decodeJWT();
  }
  loadToken(){
    this.token=localStorage.getItem('jwt')!;
    this.decodeJWT();
  }
  decodeJWT(){
    if(this.token==undefined)
    return;
    const decodedToken=this.helper.decodeToken(this.token);
    this.roles=decodedToken.roles;
    console.log("roles"+this.roles);
    this.loggedUser=decodedToken.sub;
  
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token=undefined!;
   localStorage.removeItem("jwt");
    this.router.navigate(['/login']);
  }
  isTokenExpired():Boolean{
    return this.helper.isTokenExpired(this.token);
  }
  getToken():string{
    return this.token;
  }


  // signIn(user: User): boolean {
  //   let validUser: boolean = false;
  //   this.users.forEach((curUser) => {
  //     if (curUser.username === user.username && curUser.password === user.password) {
  //       validUser = true;
  //       this.loggedUser = curUser.username;
  //       this.isloggedIn = true;
  //       this.roles = curUser.roles.map(role => role.toString()); // Convert roles to string[]
  //       localStorage.setItem("LoggedUser", this.loggedUser);
  //       localStorage.setItem("isloggedIn", String(this.isloggedIn));
  //     }
  //   });
  //   return validUser;
  // }
  isAdmin():Boolean{
    if(!this.roles)
    return false;
    return this.roles.indexOf('ADMIN')>=0;
  }
  setLoggedUserFromLocalStorage(login:string){
    this.loggedUser = login;
    this.isloggedIn=true;
    //this.getUserRoles(login);
  }
//   getUserRoles(username:string){
//     this.users.forEach((curUser)=>{
//       if(curUser.username===username){
//         this.roles!=curUser.roles;
//     }
//   } );
// }
registerUser(user :User){
  return this.http.post<User>(this.apiURL+'/register',user,{observe:'response'});
}
}