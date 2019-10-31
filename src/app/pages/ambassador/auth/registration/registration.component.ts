import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  userRoles: any;
  public loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      p_confirm: [''],
      role: ['']
    });

    this.userRoles = [
      { name: 'supervisor', value: 'supervisor' },
      { name: 'ambassador', value: 'ambassador' }
    ];
  }

  login() {
    this.router.navigate(['app']);
  }

  createAccount() {
    const formData = this.registerForm.value;
    this.loading = true;
    const payload = {
      user: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        confirm_password: formData.p_confirm
      }
    };

    this.authService.createAccount(payload).subscribe(
      (response: any) => {
        this.loading = false;
        this.router.navigate(['app']);
        this.toastr.success(response.message);
      },

      err => {
        this.loading = false;
        this.toastr.warning(err.message);
      }
    );
  }
}
