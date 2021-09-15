import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllEventsComponent} from "./all-events.component";
import {EventDetailsPageComponent} from "./event-details-page/event-details-page.component";

const routes: Routes = [
  {
    path: '',
    component: AllEventsComponent
  },
  {
    path: 'event-details',
    component: EventDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllEventsRoutingModule { }
