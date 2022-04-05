import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFondComponent } from './partners-fond.component';

describe('PartnersFondComponent', () => {
  let component: PartnersFondComponent;
  let fixture: ComponentFixture<PartnersFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
