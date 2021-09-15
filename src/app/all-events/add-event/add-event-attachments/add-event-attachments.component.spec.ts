import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventAttachmentsComponent } from './add-event-attachments.component';

describe('AddEventAttachmentsComponent', () => {
  let component: AddEventAttachmentsComponent;
  let fixture: ComponentFixture<AddEventAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
