import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';

@Component({
  selector: 'app-create-rec',
  templateUrl: './create-rec.component.html',
  styleUrls: ['./create-rec.component.css']
})
export class CreateRecComponent implements OnInit {
  recForm: FormGroup;
  public loading: false;
  grade = 0;
  maxRating = 5;
  showRatingCounter = true;
  myRating: number;
  rate: any;
  constructor(
    private fb: FormBuilder,
    private recService: RecommendationService
  ) {}

  ngOnInit() {
    this.recForm = this.fb.group({
      start: [''],
      end: [''],
      rate: [''],
      attachment: ['']
    });
  }
  onRate(value) {
    this.rate = value.newValue.toString();
  }
  createRecommendation() {
    const formData = this.recForm.value;
    const payload = {
      recommendations: {
        start_date: formData.start,
        end_date: formData.end,
        rate: this.rate,
        attachment: formData.attachment,
        project_id: sessionStorage.getItem('project_id')
      }
    };

    console.log(payload);

    this.recService.createRecommendation(payload).subscribe(response => {
      console.log(response);
    });
  }
}
