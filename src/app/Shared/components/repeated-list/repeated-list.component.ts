import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repeated-list',
  templateUrl: './repeated-list.component.html',
  styleUrls: ['./repeated-list.component.scss']
})
export class RepeatedListComponent implements OnInit {
  @Input() listOfItems: any;
  @Input() type = ''; // users-avatar, categories
  constructor() { }

  ngOnInit(): void {
  }

}
