import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecComponent } from './create-rec.component';

describe('CreateRecComponent', () => {
  let component: CreateRecComponent;
  let fixture: ComponentFixture<CreateRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
