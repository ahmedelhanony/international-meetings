import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() className = 'primary-form gray-input';
  @Input() showLabel = false;
  @Input() optional = false;
  constructor() { }

  ngOnInit(): void {
  }

}
