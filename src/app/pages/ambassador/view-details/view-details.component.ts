import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  project: any;
  email: string;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.email = sessionStorage.getItem('email');
    this.projectService
      .projectDetails(sessionStorage.getItem('pid'))
      .subscribe((response: any) => {
        this.project = response.data;
      });
  }
}
