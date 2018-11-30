import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiUsers;
  }
  
  // GET
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // GET
  getUser(id): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }
  // PUT | PATCH
  setuser(id, data): Observable<any> {
    // (id) ? this.http.put(this.baseUrl + id, data) : false;
    if (id) {
      return this.http.put(this.baseUrl + id, data);
    }
  }
  // POST
  addUser(data): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  // DELETE
  deleteUser(id): Observable<any> {
    // (id) ? this.http.delete(this.baseUrl + id) : false;
    if (id) {
      return this.http.delete(this.baseUrl + id);
    }
  }
}
