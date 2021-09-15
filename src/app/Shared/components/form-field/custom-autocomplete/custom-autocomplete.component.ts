import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';


export class AutocompleteItems {
  constructor(public name: string, public userImage?: any[], public selected?: boolean) {
    if (selected === undefined) selected = false;
  }
}
@Component({
  selector: 'app-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.scss']
})
export class CustomAutocompleteComponent implements OnInit {
  @Input() usersList = false;
  @Input() categories = false;
  @Input() showTruncate = false;
  @Input() showAddBtn = true;
  @Input() tooltip! : string;
  @Input() className! : string;
  @Input() placeholder! : string;
  @Input() showLabel = true;
  @Input() multiSelect = true;
  @Input() optional = false;
  @Input() label = '';
  dataControl = new FormControl();

  @Output() openDialog = new EventEmitter();



  @Input() data: AutocompleteItems[] = new Array<AutocompleteItems>();

  selectedItems: AutocompleteItems[] = new Array<AutocompleteItems>();

  filteredItems: any;
  lastFilter: string = '';

  ngOnInit() {
    this.filteredItems = this.dataControl.valueChanges.pipe(
      startWith<string | AutocompleteItems[]>(''),
      map(value => typeof value === 'string' ? value : this.lastFilter),
      map(filter => this.filter(filter))
    );
  }

  filter(filter: string): AutocompleteItems[] {
    this.lastFilter = filter;
    if (filter) {
      return this.data.filter(option => {
        return option.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
      })
    } else {
      return this.data.slice();
    }
  }

  // displayFn(value: User[] | string): string | undefined {
  //   let displayValue: string;
  //   if (Array.isArray(value)) {
  //     value.forEach((user, index) => {
  //       if (index === 0) {
  //         displayValue = user.firstname + ' ' + user.lastname;
  //       } else {
  //         displayValue += ', ' + user.firstname + ' ' + user.lastname;
  //       }
  //     });
  //   } else {
  //     displayValue = value;
  //   }
  //   return displayValue;
  // }

  optionClicked(event: Event, autocompleteItem: AutocompleteItems) {
    event.stopPropagation();
    this.toggleSelection(autocompleteItem);
  }

  toggleSelection(autocompleteItem: AutocompleteItems) {
    autocompleteItem.selected = !autocompleteItem.selected;
    if (autocompleteItem.selected) {
      this.selectedItems.push(autocompleteItem);
    } else {
      const i = this.selectedItems.findIndex(value => value.name === autocompleteItem.name && value.userImage === autocompleteItem.userImage);
      this.selectedItems.splice(i, 1);
    }

    // this.dataControl.setValue(this.selectedItems);
  }

  constructor() { }


  emitOpenDialog() {
    this.openDialog.emit('');
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
}
