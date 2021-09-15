import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() title = '';
  @Input() link = '';
  @Input() className = '';
  @Input() iconName = '';
  @Input() type = '';
  @Input() listOfItems: any;
  constructor() { }

  ngOnInit(): void {
  }

}
