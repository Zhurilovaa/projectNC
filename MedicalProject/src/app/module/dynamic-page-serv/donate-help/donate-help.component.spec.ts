import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateHelpComponent } from './donate-help.component';

describe('DonateHelpFormComponent', () => {
  let component: DonateHelpComponent;
  let fixture: ComponentFixture<DonateHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
