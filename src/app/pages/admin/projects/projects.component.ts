import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.fetchAllProjects().subscribe((response: any) => {
      this.projects = response.data;
    });
  }
}
