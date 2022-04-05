import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHelpFondComponent } from './get-help-fond.component';

describe('GetHelpFondComponent', () => {
  let component: GetHelpFondComponent;
  let fixture: ComponentFixture<GetHelpFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHelpFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHelpFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
