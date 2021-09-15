import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  categories = [
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
  ];

  tags = [
    {
      name: 'Tag'
    },
    {
      name: 'Tag'
    },
    {
      name: 'Tag'
    },
    {
      name: 'Tag'
    },
  ];

  usersAvatar = [
    {
      name: 'Ahmed',
      image: 'assets/images/user.png'
    },
    {
      name: 'Ibrahim',
      image: 'assets/images/user-1.png'
    },
    {
      name: 'Youssef',
      image: 'assets/images/user-2.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
