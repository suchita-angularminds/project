import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import{RouterModule,Routes} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UniqueemailcheckService {

  url1= 'http://localhost:3000/myapi/checkemail' ;

  constructor(private http : HttpClient) { }
  check(email){
    console.log("dddddddddddd",email)

    return this.http.post<any>(this.url1,email);
  }
}
