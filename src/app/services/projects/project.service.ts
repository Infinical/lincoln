import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  id: any;
  constructor(private http: HttpClient) {}

  createProject(payload) {
    return this.http.post(`${environment.baseurl}projects `, payload);
  }

  fetchMyProjects(payload) {
    return this.http.post(`${environment.baseurl}my_projects`, payload);
  }

  projectDetails(id) {
    return this.http.get(`${environment.baseurl}projects/${id}`);
  }

  //admin

  fetchAllProjects() {
    return this.http.get(`${environment.baseurl}projects`);
  }
}
