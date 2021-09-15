import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddGroupComponent} from "../Shared/components/add-group/add-group.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups = [
    {
      title: 'Group Name Here',
      users: [
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
        {
          name: 'Marwan',
          image: 'assets/images/user-1.png'
        },
      ]
    },
    {
      title: 'Group Name Here',
      users: [
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
    },
    {
      title: 'Group Name Here',
      users: [
        {
          name: 'Ahmed',
          image: 'assets/images/user.png'
        },
      ]
    },
    {
      title: 'Group Name Here',
      users: [
        {
          name: 'Ahmed',
          image: 'assets/images/user.png'
        },
        {
          name: 'Ibrahim',
          image: 'assets/images/user-1.png'
        },
      ]
    },
    {
      title: 'Group Name Here',
      users: [
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
        {
          name: 'Marwan',
          image: 'assets/images/user-1.png'
        },
      ]
    },
    {
      title: 'Group Name Here',
      users: [
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
    },
    {
      title: 'Group Name Here',
      users: [
        {
          name: 'Ahmed',
          image: 'assets/images/user.png'
        },
      ]
    },
    {
      title: 'Group Name Here',
      users: [
        {
          name: 'Ahmed',
          image: 'assets/images/user.png'
        },
        {
          name: 'Ibrahim',
          image: 'assets/images/user-1.png'
        },
      ]
    },
  ]

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }


  addGroup(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: '750px',
      height: '90%',
      panelClass: ['main-popup'],
      data: {
        backToAddEvent : false,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }

}
