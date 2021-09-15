import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import {OrganizationsComponent} from "./organizations.component";
import {SharedModule} from "../Shared/shared.module";
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationDetailsComponent,
    AddOrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrganizationsModule { }
