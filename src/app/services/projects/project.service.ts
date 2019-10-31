import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  id: any;
  constructor(private http: HttpClient) {}
  //ambassador
  createProject(payload) {
    return this.http.post(`${environment.baseurl}projects `, payload);
  }

  fetchMyProjects(payload) {
    return this.http.post(`${environment.baseurl}my_projects`, payload);
  }

  projectDetails(id) {
    return this.http.get(`${environment.baseurl}projects/${id}`);
  }

  addSupervisor(id, payload) {
    return this.http.put(`${environment.baseurl}projects/${id}`, payload);
  }

  //admin

  fetchAllProjects(payload) {
    return this.http.post(`${environment.baseurl}sup_projects`, payload);
  }

  getProjects() {
    return this.http.get(`${environment.baseurl}aprojects`);
  }

  getProjectDetails(id) {
    return this.http.get(`${environment.baseurl}aprojects/${id}`);
  }

  deleteProject(id) {
    return this.http.delete(`${environment.baseurl}aprojects/${id}`);
  }
}
