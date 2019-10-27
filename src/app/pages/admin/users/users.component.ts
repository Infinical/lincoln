import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response.data;
    });
  }
}
