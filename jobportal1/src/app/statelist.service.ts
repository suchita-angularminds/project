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
export class StatelistService {

  url2= 'http://localhost:3000/myapi/states/' ;

  constructor(private http : HttpClient) { }

  getstateslist(): Observable<any> {
    return this.http.get(this.url2)
  };


}







