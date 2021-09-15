import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EventListFilterComponent} from "./event-list-filter/event-list-filter.component";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  columns = ['Subject', 'Category', 'Group', 'Type', 'Location', 'googleLink', 'Date'];
  columnsConfig = [
    {
      label: 'Subject',
      type: 'text'
    },
    {
      label: 'Category',
      type: 'text'
    },
    {
      label: 'Group',
      type: 'group'
    },
    {
      label: 'Type',
      type: 'text'
    },
    {
      label: 'Location',
      type: 'text'
    },
    {
      label: 'Google link',
      type: 'link'
    },
    {
      label: 'Date',
      type: 'date'
    },
    {
      label: '',
      type: 'statusAction'
    },
  ];
  dataSource = [
    {
      Subject: 'My Demonstration Project One',
      Category: 'Green Hydrogen',
      Group: {
        groupName: 'Board',
        users: [
          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          }
        ]
      },
      Type: 'Type 1',
      Location: 'Mursalat building...',
      googleLink: 'https://goo.gl/map...',
      Date: {
        from: '22/10/2021',
        to: '23/10/2021'
      },
      statusAction: 'new'
    },
    {
      Subject: 'My Demonstration Project One',
      Category: 'Green Hydrogen',
      Group: {
        groupName: 'Board',
        users: [
          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          }
        ]
      },
      Type: 'Type 1',
      Location: 'Mursalat building...',
      googleLink: 'https://goo.gl/map...',
      Date: {
        from: '22/10/2021',
        to: '23/10/2021'
      },
      statusAction: 'new'
    },
    {
      Subject: 'My Demonstration Project One',
      Category: 'Green Hydrogen',
      Group: {
        groupName: 'Board',
        users: [
          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          }
        ]
      },
      Type: 'Type 1',
      Location: 'Mursalat building...',
      googleLink: 'https://goo.gl/map...',
      Date: {
        from: '22/10/2021',
        to: '23/10/2021'
      },
      statusAction: 'approved'
    },
    {
      Subject: 'My Demonstration Project One',
      Category: 'Green Hydrogen',
      Group: {
        groupName: 'Board',
        users: [
          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          }
        ]
      },
      Type: 'Type 1',
      Location: 'Mursalat building...',
      googleLink: 'https://goo.gl/map...',
      Date: {
        from: '22/10/2021',
        to: '23/10/2021'
      },
      statusAction: 'rejected'
    },
    {
      Subject: 'My Demonstration Project One',
      Category: 'Green Hydrogen',
      Group: {
        groupName: 'Board',
        users: [
          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          },

          {
            name: 'Ahmed Elhanony',
            image: 'assets/images/user.png'
          }
        ]
      },
      Type: 'Type 1',
      Location: 'Mursalat building...',
      googleLink: 'https://goo.gl/map...',
      Date: {
        from: '22/10/2021',
        to: '23/10/2021'
      },
      statusAction: 'delegated',
      delegatedTo: {
        name: 'Ahmed Elhanony',
        image: 'assets/images/user.png'
      }

    },
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openFilters(): void {
    const dialogRef = this.dialog.open(EventListFilterComponent, {
      panelClass: ['main-popup', 'filter-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {

      // console.log('The dialog was closed');
    });
  }

}
