import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  loading: boolean;
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.projectService
      .getProjectDetails(sessionStorage.getItem('project_id'))
      .subscribe((response: any) => {
        this.loading = false;
        this.project = response.data;
      });
  }

  deleteProject() {
    this.loading = true;
    this.projectService
      .deleteProject(sessionStorage.getItem('project_id'))
      .subscribe((response: any) => {
        this.router.navigate(['admin/projects']);
        this.loading = false;
        console.log(response);
      });
  }
}
