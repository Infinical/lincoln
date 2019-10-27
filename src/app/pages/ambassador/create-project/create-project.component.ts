import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: [''],
      description: [''],
      start: [''],
      end: [''],
      attachment: ['']
    });
  }

  createProject() {
    this.loading = true;
    const formData = this.projectForm.value;
    const payload = {
      project: {
        name: formData.name,
        description: formData.description,
        start_date: formData.start,
        end_date: formData.end,
        attachment: formData.attachment,
        user_id: sessionStorage.getItem('id')
      }
    };
    this.projectService.createProject(payload).subscribe(
      (response: any) => {
        this.loading = false;
        this.toastr.success(response.message);
        this.router.navigate(['amb/view']);
      },

      err => {
        this.loading = false;
        this.toastr.error(err.message);
      }
    );
  }
}
