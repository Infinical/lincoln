import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-invite-supervisor',
  templateUrl: './invite-supervisor.component.html',
  styleUrls: ['./invite-supervisor.component.css']
})
export class InviteSupervisorComponent implements OnInit {
  inviteForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inviteForm = this.fb.group({
      title: [''],
      email: [''],
      occupation: [''],
      phone: [''],
      name: ['']
    });
  }
}
