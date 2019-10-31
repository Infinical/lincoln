import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-invite-supervisor',
  templateUrl: './invite-supervisor.component.html',
  styleUrls: ['./invite-supervisor.component.css']
})
export class InviteSupervisorComponent implements OnInit {
  inviteForm: FormGroup;
  addForm: FormGroup;
  loading: any;
  sups: any;
  projects: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.inviteForm = this.fb.group({
      title: [''],
      email: [''],
      occupation: [''],
      phone: [''],
      name: ['']
    });

    this.addForm = this.fb.group({
      project: [''],
      sup: ['']
    });

    this.authService.fetchSupervisors().subscribe((response: any) => {
      this.sups = response.data;
    });

    const payload = {
      id: sessionStorage.getItem('id')
    };
    this.projectService.fetchMyProjects(payload).subscribe((response: any) => {
      this.projects = response.data;
    });
  }

  inviteSup() {
    const formData = this.inviteForm.value;
    const payload = {
      user: {
        email: formData.email,
        role: 'supervisor'
      }
    };

    this.authService.inviteSup(payload).subscribe((response: any) => {
      console.log(response);
    });
  }

  addSupervisor() {
    const formData = this.addForm.value;
    const id = formData.project;
    const payload = {
      project: {
        supervisor_id: formData.sup
      }
    };
    console.log(payload);
    this.projectService
      .addSupervisor(id, payload)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
