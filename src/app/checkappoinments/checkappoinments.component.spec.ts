import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckappoinmentsComponent } from './checkappoinments.component';

describe('CheckappoinmentsComponent', () => {
  let component: CheckappoinmentsComponent;
  let fixture: ComponentFixture<CheckappoinmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckappoinmentsComponent]
    });
    fixture = TestBed.createComponent(CheckappoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
