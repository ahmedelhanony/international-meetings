import { Component, OnInit } from '@angular/core';
import {AutocompleteItems} from "../../Shared/components/form-field/custom-autocomplete/custom-autocomplete.component";

@Component({
  selector: 'app-event-delegate',
  templateUrl: './event-delegate.component.html',
  styleUrls: ['./event-delegate.component.scss']
})
export class EventDelegateComponent implements OnInit {
  users = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
