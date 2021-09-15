import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarFilterComponent } from './event-calendar-filter.component';

describe('EventCalendarFilterComponent', () => {
  let component: EventCalendarFilterComponent;
  let fixture: ComponentFixture<EventCalendarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCalendarFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
