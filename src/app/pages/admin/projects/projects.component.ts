import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  selected = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((response: any) => {
      this.projects = response.data;
    });
  }

  viewDetails(value) {
    sessionStorage.setItem('project_id', value);
    this.router.navigate(['admin/pdetails']);
  }
}
