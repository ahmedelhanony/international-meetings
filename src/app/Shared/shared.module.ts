import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from './material.module';
import {DocsUploaderComponent} from './components/doc-uploader/docs-uploader.component';
import {DeletePopupComponent} from './components/delete-popup/delete-popup.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import {SatPopoverModule} from "@ncstate/sat-popover";
import { CustomAutocompleteComponent } from './components/form-field/custom-autocomplete/custom-autocomplete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TimePickerComponent} from "./components/form-field/time-picker/time-picker.component";
import {TableListComponent} from "./components/table-list/table-list.component";
import { RepeatedListComponent } from './components/repeated-list/repeated-list.component';
import {RouterModule} from "@angular/router";
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { InputComponent } from './components/form-field/input/input.component';
import { SelectComponent } from './components/form-field/select/select.component';
import { DatePickerComponent } from './components/form-field/date-picker/date-picker.component';
import { DateRangePickerComponent } from './components/form-field/date-range-picker/date-range-picker.component';
import { TextareaComponent } from './components/form-field/textarea/textarea.component';
import { SlaComponent } from './components/sla/sla.component';
import { ColorPickerComponent } from './components/form-field/color-picker/color-picker.component';
import { AddGroupComponent } from './components/add-group/add-group.component';

@NgModule({
  declarations: [
    DocsUploaderComponent,
    DeletePopupComponent,
    CardItemComponent,
    CustomAutocompleteComponent,
    TimePickerComponent,
    TableListComponent,
    RepeatedListComponent,
    TitleSectionComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    TextareaComponent,
    SlaComponent,
    ColorPickerComponent,
    AddGroupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SatPopoverModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    SatPopoverModule,
    DocsUploaderComponent,
    DeletePopupComponent,
    CardItemComponent,
    CustomAutocompleteComponent,
    TimePickerComponent,
    TableListComponent,
    RepeatedListComponent,
    TitleSectionComponent,
    SelectComponent,
    InputComponent,
    TextareaComponent,
    DateRangePickerComponent,
    DatePickerComponent,
    ColorPickerComponent
  ]
})
export class SharedModule {
}
