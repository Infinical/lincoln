import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recs: any;
  selected = [];
  constructor(private recService: RecommendationService) {}

  ngOnInit() {
    this.recService.getAllRecommedations().subscribe((response: any) => {
      this.recs = response.data;
    });
  }
}
