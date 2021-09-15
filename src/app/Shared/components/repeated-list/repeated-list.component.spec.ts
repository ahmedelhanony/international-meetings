import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedListComponent } from './repeated-list.component';

describe('RepeatedListComponent', () => {
  let component: RepeatedListComponent;
  let fixture: ComponentFixture<RepeatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
