import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() className! : string;
  @Input() showLabel : boolean = true;
  @Input() colors! : any[];
  constructor() { }

  ngOnInit(): void {
  }

}
