import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRescheduleComponent } from './event-reschedule.component';

describe('EventRescheduleComponent', () => {
  let component: EventRescheduleComponent;
  let fixture: ComponentFixture<EventRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
