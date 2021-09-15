import { Component, OnInit } from '@angular/core';
// import {AddGroupComponent} from "../../../groups/add-group/add-group.component";
import {MatDialog} from "@angular/material/dialog";
import {AutocompleteItems} from "../../../Shared/components/form-field/custom-autocomplete/custom-autocomplete.component";
import {AddGroupComponent} from "../../../Shared/components/add-group/add-group.component";

@Component({
  selector: 'app-add-event-details',
  templateUrl: './add-event-details.component.html',
  styleUrls: ['./add-event-details.component.scss']
})
export class AddEventDetailsComponent implements OnInit {

  organizations = [
    new AutocompleteItems('Misha', []),
    new AutocompleteItems('Felix', []),
    new AutocompleteItems('Odessa', []),
    new AutocompleteItems('Julianne', []),
    new AutocompleteItems('Virgil', []),
    new AutocompleteItems('Justa', []),
    new AutocompleteItems('Keely', []),
    new AutocompleteItems('Blanca', []),
    new AutocompleteItems('Alejandrina', []),
    new AutocompleteItems('Rosy', []),
    new AutocompleteItems('Winona', []),
    new AutocompleteItems('Reynaldo', []),
    new AutocompleteItems('Shawn', []),
    new AutocompleteItems('Shemeka', []),
    new AutocompleteItems('Sheila', []),
    new AutocompleteItems('Zola', []),
    new AutocompleteItems('Dena', []),
    new AutocompleteItems('Concepcion', []),
    new AutocompleteItems('Marylynn', []),
    new AutocompleteItems('Howard', []),
    new AutocompleteItems('Maxine', []),
    new AutocompleteItems('Iliana', []),
    new AutocompleteItems('Laverna', []),
    new AutocompleteItems('Brittany', []),
    new AutocompleteItems('Esteban', []),
    new AutocompleteItems('Myron', []),
    new AutocompleteItems('Geri', []),
    new AutocompleteItems('Minna', []),
    new AutocompleteItems('Yi', []),
    new AutocompleteItems('Lloyd', []),
    new AutocompleteItems('Marquis', []),
    new AutocompleteItems('Lupita', []),
    new AutocompleteItems('Fernande', []),
    new AutocompleteItems('Eloise', []),
    new AutocompleteItems('Abram', []),
    new AutocompleteItems('Karisa', []),
    new AutocompleteItems('Bailey', []),
    new AutocompleteItems('Juliane', []),
    new AutocompleteItems('Giselle', []),
    new AutocompleteItems('Chelsie', []),
    new AutocompleteItems('Catina', []),
    new AutocompleteItems('Edris', []),
    new AutocompleteItems('Harry', []),
    new AutocompleteItems('Yasmin', []),
    new AutocompleteItems('Cheyenne', []),
    new AutocompleteItems('Joannie', []),
    new AutocompleteItems('Sherril', []),
    new AutocompleteItems('Mariann', []),
    new AutocompleteItems('Sena', []),
    new AutocompleteItems('Cami',  [])
  ];

  groups = [
    new AutocompleteItems('Misha', ['assets/images/user.png',]),
    new AutocompleteItems('Felix', ['assets/images/user.png', 'assets/images/user-1.png',]),
    new AutocompleteItems('Odessa', []),
    new AutocompleteItems('Julianne', []),
    new AutocompleteItems('Virgil', []),
    new AutocompleteItems('Justa', []),
    new AutocompleteItems('Keely', []),
    new AutocompleteItems('Blanca', []),
    new AutocompleteItems('Alejandrina', []),
    new AutocompleteItems('Rosy', []),
    new AutocompleteItems('Winona', []),
    new AutocompleteItems('Reynaldo', []),
    new AutocompleteItems('Shawn', []),
    new AutocompleteItems('Shemeka', []),
    new AutocompleteItems('Sheila', []),
    new AutocompleteItems('Zola', []),
    new AutocompleteItems('Dena', []),
    new AutocompleteItems('Concepcion', []),
    new AutocompleteItems('Marylynn', []),
    new AutocompleteItems('Howard', []),
    new AutocompleteItems('Maxine', []),
    new AutocompleteItems('Iliana', []),
    new AutocompleteItems('Laverna', []),
    new AutocompleteItems('Brittany', []),
    new AutocompleteItems('Esteban', []),
    new AutocompleteItems('Myron', []),
    new AutocompleteItems('Geri', []),
    new AutocompleteItems('Minna', []),
    new AutocompleteItems('Yi', []),
    new AutocompleteItems('Lloyd', []),
    new AutocompleteItems('Marquis', []),
    new AutocompleteItems('Lupita', []),
    new AutocompleteItems('Fernande', []),
    new AutocompleteItems('Eloise', []),
    new AutocompleteItems('Abram', []),
    new AutocompleteItems('Karisa', []),
    new AutocompleteItems('Bailey', []),
    new AutocompleteItems('Juliane', []),
    new AutocompleteItems('Giselle', []),
    new AutocompleteItems('Chelsie', []),
    new AutocompleteItems('Catina', []),
    new AutocompleteItems('Edris', []),
    new AutocompleteItems('Harry', []),
    new AutocompleteItems('Yasmin', []),
    new AutocompleteItems('Cheyenne', []),
    new AutocompleteItems('Joannie', []),
    new AutocompleteItems('Sherril', []),
    new AutocompleteItems('Mariann', []),
    new AutocompleteItems('Sena', []),
    new AutocompleteItems('Cami',  [])
  ];

  colors = ['#FF375E', '#4F008C', '#A54EE1', '#1BCED8', '#00C48C', '#FF6A39', '#FFDD40', '#1D252D'];




  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addGroup(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
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

}
