import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/';
  }

  public postSend(path: string, params: any): Observable<String[]> {
    return this.http.post<String[]>(this.usersUrl + path, params);
  }
}
