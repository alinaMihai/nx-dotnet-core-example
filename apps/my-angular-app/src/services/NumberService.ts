import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class NumberService {
 
  baseURL = 'https://localhost:7090/';
 
  constructor(private http: HttpClient) {
  }
 
  isOddNumber(num: number): Observable<any> {
    return this.http.get(this.baseURL + 'Number/IsOddNumber/' + num);
  }
 
}