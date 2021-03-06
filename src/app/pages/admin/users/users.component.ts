import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  selected: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response.data;
    });
  }

  getUserDetails(value) {
    sessionStorage.setItem('user_id', value);
    this.router.navigate(['admin/udetails']);
  }
}
