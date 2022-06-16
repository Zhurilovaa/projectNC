import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsFondComponent } from './reports-fond.component';

describe('ReportsFondComponent', () => {
  let component: ReportsFondComponent;
  let fixture: ComponentFixture<ReportsFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
