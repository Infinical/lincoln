import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService
      .getProjectDetails(sessionStorage.getItem('project_id'))
      .subscribe((response: any) => {
        this.project = response.data;
      });
  }
}
