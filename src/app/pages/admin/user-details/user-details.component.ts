import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const payload = {
      id: sessionStorage.getItem('user_id')
    };
    this.authService.userDetails(payload).subscribe((response: any) => {
      this.user = response.data;
    });
  }
}
