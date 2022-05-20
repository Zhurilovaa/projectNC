import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonateComponent } from './form-donate.component';

describe('FormDonateComponent', () => {
  let component: FormDonateComponent;
  let fixture: ComponentFixture<FormDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
