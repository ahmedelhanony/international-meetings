import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelInvitationComponent } from './cancel-invitation.component';

describe('CancelInvitationComponent', () => {
  let component: CancelInvitationComponent;
  let fixture: ComponentFixture<CancelInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
