import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
// import {AddGroupComponent} from "../groups/add-group/add-group.component";
import {AddEventComponent} from "./add-event/add-event.component";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

  pageViewList: string = '';



  constructor( public dialog: MatDialog ) {
    // this.pageViewList = 'calendar';
  }

  ngOnInit(): void {
    this.pageViewList = 'calendar';
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
