import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createAccount(payload) {
    return this.http.post(`${environment.baseurl}registration`, payload);
  }

  login(payload) {
    return this.http.post(`${environment.baseurl}session`, payload);
  }

  logout() {
    return this.http.delete(`${environment.baseurl}session`);
  }
}
