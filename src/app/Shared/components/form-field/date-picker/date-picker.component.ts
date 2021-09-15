import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() className! : string;
  @Input() placeholder! : string;
  @Input() showLabel = false;
  @Input() optional = false;
  constructor() { }

  ngOnInit(): void {
  }

}
