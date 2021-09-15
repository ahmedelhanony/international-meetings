import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOrganizationComponent} from "../add-organization/add-organization.component";

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {
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
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  editOrganization(): void {
    const dialogRef = this.dialog.open(AddOrganizationComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }

}
