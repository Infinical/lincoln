import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  projects: any;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    const payload = {
      id: sessionStorage.getItem('id')
    };
    this.projectService.fetchMyProjects(payload).subscribe((response: any) => {
      this.projects = response.data;
    });
  }
}
