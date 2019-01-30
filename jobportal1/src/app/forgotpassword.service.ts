import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  url1= 'http://localhost:3000/myapi/forgotpassword' ;
  url2= 'http://localhost:3000/myapi/updatepassword' ;
 
  constructor(private http:HttpClient) { }

  emailcheck(userdata){

    return this.http.post<any>(this.url1,userdata);
  }

  updatepassword(userdata){

    return this.http.post<any>(this.url2,userdata);

  }

  

}
