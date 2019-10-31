import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-invite-supervisor',
  templateUrl: './invite-supervisor.component.html',
  styleUrls: ['./invite-supervisor.component.css']
})
export class InviteSupervisorComponent implements OnInit {
  inviteForm: FormGroup;
  loading: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.inviteForm = this.fb.group({
      title: [''],
      email: [''],
      occupation: [''],
      phone: [''],
      name: ['']
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
}
