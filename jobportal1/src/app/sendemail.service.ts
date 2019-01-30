import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {

 url2= 'http://localhost:3000/myapi/newpassword' ;

  constructor(private http:HttpClient) { }

  sendmail(userdata){

    return this.http.post<any>(this.url2,userdata);
  }
}
