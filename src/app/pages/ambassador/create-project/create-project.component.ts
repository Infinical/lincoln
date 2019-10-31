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
  filename: any;
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
  onSelect(event) {
    console.log(event);
    this.filename = event[0].name;
  }

  createProject() {
    this.loading = true;
    const formData = this.projectForm.value;
    console.log(formData.attachment);
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

  // uploadFile() {
  //   var bar = document.getElementById('js-progressbar');

  //   UIkit.upload('.js-upload', {
  //     url: '',
  //     multiple: true,

  //     beforeSend: function() {
  //       console.log('beforeSend', arguments);
  //     },
  //     beforeAll: function() {
  //       console.log('beforeAll', arguments);
  //     },
  //     load: function() {
  //       console.log('load', arguments);
  //     },
  //     error: function() {
  //       console.log('error', arguments);
  //     },
  //     complete: function() {
  //       console.log('complete', arguments);
  //     },

  //     loadStart: function(e) {
  //       console.log('loadStart', arguments);

  //       bar.removeAttribute('hidden');
  //       bar.max = e.total;
  //       bar.value = e.loaded;
  //     },

  //     progress: function(e) {
  //       console.log('progress', arguments);

  //       bar.max = e.total;
  //       bar.value = e.loaded;
  //     },

  //     loadEnd: function(e) {
  //       console.log('loadEnd', arguments);

  //       bar.max = e.total;
  //       bar.value = e.loaded;
  //     },

  //     completeAll: function() {
  //       console.log('completeAll', arguments);

  //       setTimeout(function() {
  //         bar.setAttribute('hidden', 'hidden');
  //       }, 1000);

  //       alert('Upload Completed');
  //     }
  //   });
  // }
}
