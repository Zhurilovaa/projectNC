import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFondComponent } from './contacts-fond.component';

describe('ContactsFondComponent', () => {
  let component: ContactsFondComponent;
  let fixture: ComponentFixture<ContactsFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
