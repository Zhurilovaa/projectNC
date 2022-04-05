import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFoundComponent } from './about-found.component';

describe('AboutFoundComponent', () => {
  let component: AboutFoundComponent;
  let fixture: ComponentFixture<AboutFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
