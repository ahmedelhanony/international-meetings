import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDelegateComponent } from './event-delegate.component';

describe('EventDelegateComponent', () => {
  let component: EventDelegateComponent;
  let fixture: ComponentFixture<EventDelegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDelegateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
