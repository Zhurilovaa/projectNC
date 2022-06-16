import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFondComponent } from './project-fond.component';

describe('ProjectFondComponent', () => {
  let component: ProjectFondComponent;
  let fixture: ComponentFixture<ProjectFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
