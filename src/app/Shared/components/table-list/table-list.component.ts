import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {DeletePopupComponent} from "../delete-popup/delete-popup.component";
import {EventDelegateComponent} from "../../../all-events/event-delegate/event-delegate.component";
import {EventDeclineComponent} from "../../../all-events/event-decline/event-decline.component";
import {SidenavService} from "../../services/sidenav.service";


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() columns: any;
  @Input() columnsConfig: any;
  @Input() rows: any;
  @Input() actions: any = [];
  @Input() className = '';
  public dataSource = new MatTableDataSource<any>();
  constructor( public dialog: MatDialog, private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.dataSource.data = this.rows;
  }

  truncateName(text: string) {
    if (text) {
      let characters = text.match(/\b(\w)/g);
      if (characters) {
        return characters.join('');
      } else {
        return '';
      }
    } else {
      return '';
    }
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



  delete(): void {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title : 'Delete Match',
        message : 'Are you sure you want delete',
        confirmText : 'match making example name',
        moreText : '',
        type : 'delete',
        icon : 'delete-match',
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

  getSlaColor(min: number, max: number): string {
    const slaColor = min >= max ? '#CA102F' : '#02C389';
    return slaColor
  }
}
