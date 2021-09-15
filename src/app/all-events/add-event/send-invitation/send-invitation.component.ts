import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEventComponent} from "../add-event.component";

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }


  addEvent(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      width: '750px',
      height: '95%',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }

}
