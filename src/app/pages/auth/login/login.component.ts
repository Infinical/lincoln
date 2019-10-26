import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  register() {
    this.router.navigate(['app/register']);
  }

  login() {
    this.loading = true;
    const formData = this.loginForm.value;

    const payload = {
      user: {
        email: formData.email,
        password: formData.password
      }
    };

    this.authService.login(payload).subscribe(
      (response: any) => {
        this.loading = false;
        this.toastr.success(response.message);
      },
      err => {
        this.loading = false;
        this.toastr.error(err.message);
      }
    );
  }
}
