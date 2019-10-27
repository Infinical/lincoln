import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSupervisorComponent } from './invite-supervisor.component';

describe('InviteSupervisorComponent', () => {
  let component: InviteSupervisorComponent;
  let fixture: ComponentFixture<InviteSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
