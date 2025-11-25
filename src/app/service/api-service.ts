import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class ApiService {
   public baseUrl = 'http://localhost:8000/api/v1';    // PROXY BASE URL

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, data);
  }
  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }
 logoutUser(data:any): Observable<any> {
  return this.http.post(`${this.baseUrl}/users/logout`, data);
}

}
