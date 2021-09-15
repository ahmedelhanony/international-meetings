import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAttachmentsComponent } from './event-attachments.component';

describe('EventAttachmentsComponent', () => {
  let component: EventAttachmentsComponent;
  let fixture: ComponentFixture<EventAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
