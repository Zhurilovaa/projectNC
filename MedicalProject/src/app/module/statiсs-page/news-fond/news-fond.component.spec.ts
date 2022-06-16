import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFondComponent } from './news-fond.component';

describe('NewsFondComponent', () => {
  let component: NewsFondComponent;
  let fixture: ComponentFixture<NewsFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
