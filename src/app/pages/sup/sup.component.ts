import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sup',
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent implements OnInit {
  loading: boolean;
  collapsed: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.email = sessionStorage.getItem('email')
  }

  logout() {
    this.loading = true;
    this.authService.logout().subscribe(
      (response: any) => {
        this.toastr.success(response.data.message);
        sessionStorage.clear();
        this.router.navigate(['']);
      },
      err => {
        this.loading = false;
        this.toastr.error(err.message);
      }
    );
  }
}
