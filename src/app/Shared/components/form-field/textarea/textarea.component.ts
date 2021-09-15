import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() label! : string;
  @Input() tooltip! : string;
  @Input() placeholder! : string;
  @Input() className! : string;
  @Input() showLabel = true;
  @Input() optional = false;
  constructor() { }

  ngOnInit(): void {
  }

}
