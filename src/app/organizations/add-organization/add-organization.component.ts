import { Component, OnInit } from '@angular/core';
import {AutocompleteItems} from "../../Shared/components/form-field/custom-autocomplete/custom-autocomplete.component";
import {AddGroupComponent} from "../../Shared/components/add-group/add-group.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  users = [
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


  constructor( public dialog: MatDialog ) { }
  ngOnInit() {
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
