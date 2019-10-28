import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  projects: any;
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService.fetchAllProjects().subscribe((response: any) => {
      this.projects = response.data;
    });
  }

  createRecommendation(value) {
    sessionStorage.setItem('project_id', value.id);
    this.router.navigate(['sup/create']);
  }
}
