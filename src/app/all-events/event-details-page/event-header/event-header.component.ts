import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EventDelegateComponent} from "../../event-delegate/event-delegate.component";
import {EventDeclineComponent} from "../../event-decline/event-decline.component";
import {AddEventComponent} from "../../add-event/add-event.component";
import {EventRescheduleComponent} from "../event-reschedule/event-reschedule.component";
import {CancelInvitationComponent} from "../cancel-invitation/cancel-invitation.component";

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {
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


  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {}


  editEvent(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      width: '750px',
      height: '95%',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }



  delegate(): void {
    const dialogRef = this.dialog.open(EventDelegateComponent, {
      width: '750px',
      height: '90%',

      panelClass: ['main-popup'],
      data: {
        backToAddEvent : true,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

  reschedule(): void {
    const dialogRef = this.dialog.open(EventRescheduleComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }


  decline(): void {
    const dialogRef = this.dialog.open(EventDeclineComponent, {
      width: '650px',

      panelClass: ['main-popup'],
      data: {
        backToAddEvent : true,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }


  cancel(): void {
    const dialogRef = this.dialog.open(CancelInvitationComponent, {
      width: '650px',

      panelClass: ['main-popup'],
      data: {
        backToAddEvent : true,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

}
