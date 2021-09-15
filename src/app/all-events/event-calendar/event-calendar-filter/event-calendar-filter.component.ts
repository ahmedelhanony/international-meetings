import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-calendar-filter',
  templateUrl: './event-calendar-filter.component.html',
  styleUrls: ['./event-calendar-filter.component.scss']
})
export class EventCalendarFilterComponent implements OnInit {
  @Input() selectedView! : string;
  @Input() calendarViewList! : any[];
  @Input() dateText! : string;

  @Output() changeView = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  public handleChangeView() {
    this.changeView.emit(this.selectedView);
  }
  public handlePrev() {
    this.prev.emit();
  }
  public handleNext() {
    this.next.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
