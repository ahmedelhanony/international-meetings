import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventAgendaComponent } from './add-event-agenda.component';

describe('AddEventAgendaComponent', () => {
  let component: AddEventAgendaComponent;
  let fixture: ComponentFixture<AddEventAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
