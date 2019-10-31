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

  inviteSup(payload) {
    return this.http.post(`${environment.baseurl}invite`, payload);
  }

  //admin

  getAllUsers() {
    return this.http.get(`${environment.baseurl}users `);
  }

  fetchSupervisors() {
    return this.http.get(`${environment.baseurl}list_supervisors`);
  }

  userDetails(payload) {
    return this.http.post(`${environment.baseurl}user_details`, payload);
  }
}
