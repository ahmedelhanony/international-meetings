import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() className! : string;
  @Input() placeholder! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
