import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLtsMessageComponent } from './custom-lts-message.component';

describe('CustomLtsMessageComponent', () => {
  let component: CustomLtsMessageComponent;
  let fixture: ComponentFixture<CustomLtsMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomLtsMessageComponent]
    });
    fixture = TestBed.createComponent(CustomLtsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
