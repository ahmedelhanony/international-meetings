import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() className! : string;
  @Input() placeholder! : string;
  @Input() showLabel! : boolean;
  @Input() matPrefix! : boolean;
  @Input() iconPrefixName! : string;
  @Input() matSuffix! : boolean;
  @Input() iconSuffixName! : string;
  @Input() optional = false;
  @Input() tags = false;
  constructor() { }

  ngOnInit(): void {
  }

}
