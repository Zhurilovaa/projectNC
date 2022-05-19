import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateHelpFormComponent } from './donate-help-form.component';

describe('DonateHelpFormComponent', () => {
  let component: DonateHelpFormComponent;
  let fixture: ComponentFixture<DonateHelpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateHelpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateHelpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
