import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  constructor(private http: HttpClient) {}

  createRecommendation(payload) {
    return this.http.post(`${environment.baseurl}recommendations`, payload);
  }

  //admin

  getAllRecommedations() {
    return this.http.get(`${environment.baseurl}arecommendations`);
  }
}
