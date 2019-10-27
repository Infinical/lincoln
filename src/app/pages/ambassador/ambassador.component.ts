import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css']
})
export class AmbassadorComponent implements OnInit {
  email: string;
  loading: boolean;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = sessionStorage.getItem('email');
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
