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
  createRecommendation() {
    const formData = this.recForm.value;
    const payload = {
      recommendations: {
        start_date: formData.start,
        end_date: formData.end,
        rate: formData.rate,
        attachment: formData.attachment,
        project_id: sessionStorage.getItem('id')
      }
    };

    console.log(payload);

    this.recService.createRecommendation(payload).subscribe(response => {
      console.log(response);
    });
  }
}
