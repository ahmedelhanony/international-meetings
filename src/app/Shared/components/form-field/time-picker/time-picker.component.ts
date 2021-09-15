import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit , ControlValueAccessor{
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() showLabel! : boolean;
  @Input() optional = false;
  @Input() matPrefix! : boolean;
  @Input() iconPrefixName! : string;
  @Input() matSuffix! : boolean;
  @Input() iconSuffixName! : string;
  @Input() className = '';
  @Input() specialMinutes = [];
  hours : any[] = [];
  minutes : any[] = [];
  hourValue: string = '--';
  minutesValue: string = '--';
  onChange: any;
  value: any;
  constructor() { }

  ngOnInit(): void {
    this.hours = [...Array(24)].map((e, i) => {
      return (i<10 ? '0' + i : i.toString());
    });
    if(this.specialMinutes?.length > 1){
      this.minutes = [...this.specialMinutes].map((v: number, i) => {
        return (v < 10 ? '0' + v: v.toString());
      });
    } else {
      this.minutes = [...Array(60)].map((e, i) => {
        return (i<10 ? '0' + i : i.toString());
      });
    }

  }

  writeValue(value: string){
    if(value){
      const [hours, minutes, seconds] = value.split(':');
      this.hourValue = hours ;
      this.minutesValue = minutes;
    } else {
      this.hourValue = this.minutesValue = '--' ;
    }

  }

  registerOnChange(fn: void){
    this.onChange = fn;
  }

  registerOnTouched(){

  }

  chooseMinute(minute: string){
    this.minutesValue = minute;
    let newValue = `${this.hourValue}:${this.minutesValue}`;
    this.onChange(newValue);
  }

  chooseHour(hour: string){
    this.hourValue = hour;
    let newValue = `${this.hourValue}:${this.minutesValue}`;
    this.onChange(newValue)
  }
}
