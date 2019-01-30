// this service checks username and password in loginform component , if both belongs to userdata

import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import{Router} from '@angular/router';

import { catchError, tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import{RouterModule,Routes} from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

let TOKEN = 'TOKEN';
let Username = 'Username';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url1= 'http://localhost:3000/myapi/login/' ;
  url2= 'http://localhost:3000/secure/userdata' ;


  constructor(private http:HttpClient,private router:Router) { }

  setToken(Token:string): void {
    localStorage.setItem(TOKEN,Token);
    console.log("in  settoken",Token);
    
    }

  getToken() {

    return localStorage.getItem(TOKEN);

  } 
 
   isLogged() {
 
     //  return true;
     console.log("in isloggedmethod",localStorage.getItem(TOKEN));
            return localStorage.getItem(TOKEN) != null;

     
   }

   logout() {
    localStorage.removeItem("TOKEN");
    this.router.navigateByUrl('/loginform');
  }

  setUsername(username:string): void {
    localStorage.setItem(Username,username);
    console.log("in  settoken",username);
    
    }

  getUsername() {
     return localStorage.getItem(Username);
     
      
      }

  getuserinfo(TOKEN,Username) {
 
   

    return this.http.post(this.url2,{ 'Token':TOKEN , 'username' : Username, });


  }

  logincheck(userdata){

    return this.http.post<any>(this.url1,userdata);
  }
}
