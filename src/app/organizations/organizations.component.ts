import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOrganizationComponent} from "./add-organization/add-organization.component";
import {OrganizationDetailsComponent} from "./organization-details/organization-details.component";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
    organizations = [
      {
        title: 'Organization name',
        link: 'https://www.google.com./',
        categories: [
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
        ]
      },
      {
        title: 'Organization name',
        link: 'https://www.google.com./',
        categories: [
          {
            name: 'Category'
          },
          {
            name: 'Category'
          },
        ]
      },
      {
        title: 'Organization name',
        link: 'https://www.google.com./',
        categories: [
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
        ]
      },
      {
        title: 'Organization name',
        link: 'https://www.google.com./',
        categories: [
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
        ]
      },
    ]

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addOrganization(): void {
    const dialogRef = this.dialog.open(AddOrganizationComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }


  organizationDetails(): void {
    const dialogRef = this.dialog.open(OrganizationDetailsComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }



}
