import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SandBoxRoutingModule} from './sandbox-routing.module';
import {SandboxComponent} from './sandbox.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../Shared/shared.module';

import {SatPopoverModule} from '@ncstate/sat-popover';
import { StcIconsComponent } from './stc-icons/stc-icons.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {VideoPlayerComponent} from "./video-player/video-player.component";


@NgModule({
  declarations: [
    SandboxComponent,
    StcIconsComponent,
    FormFieldComponent,
    ButtonsComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    SandBoxRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SatPopoverModule,
  ],
})
export class SandboxModule {
}
