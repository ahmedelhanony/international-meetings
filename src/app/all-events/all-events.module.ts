import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllEventsRoutingModule } from './all-events-routing.module';
import {AllEventsComponent} from "./all-events.component";
import {SharedModule} from "../Shared/shared.module";
import { AddEventComponent } from './add-event/add-event.component';
import { AddEventDetailsComponent } from './add-event/add-event-details/add-event-details.component';
import { AddEventAgendaComponent } from './add-event/add-event-agenda/add-event-agenda.component';
import { AddEventAttachmentsComponent } from './add-event/add-event-attachments/add-event-attachments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SendInvitationComponent } from './add-event/send-invitation/send-invitation.component';
import { EventDetailsComponent } from './event-details-page/event-details/event-details.component';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';
import { EventAgendaComponent } from './event-details-page/event-agenda/event-agenda.component';
import { EventAttachmentsComponent } from './event-details-page/event-attachments/event-attachments.component';
import { EventHeaderComponent } from './event-details-page/event-header/event-header.component';
import { EventRescheduleComponent } from './event-details-page/event-reschedule/event-reschedule.component';
import { EventDelegateComponent } from './event-delegate/event-delegate.component';
import { EventDeclineComponent } from './event-decline/event-decline.component';
import { CancelInvitationComponent } from './event-details-page/cancel-invitation/cancel-invitation.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventListComponent } from './event-list/event-list.component';
import { EventListFilterComponent } from './event-list/event-list-filter/event-list-filter.component';
import { EventCalendarFilterComponent } from './event-calendar/event-calendar-filter/event-calendar-filter.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AllEventsComponent,
    AddEventComponent,
    AddEventDetailsComponent,
    AddEventAgendaComponent,
    AddEventAttachmentsComponent,
    SendInvitationComponent,
    EventDetailsComponent,
    EventDetailsPageComponent,
    EventAgendaComponent,
    EventAttachmentsComponent,
    EventHeaderComponent,
    EventRescheduleComponent,
    EventDelegateComponent,
    EventDeclineComponent,
    CancelInvitationComponent,
    EventCalendarComponent,
    EventListComponent,
    EventListFilterComponent,
    EventCalendarFilterComponent,
  ],
  imports: [
    CommonModule,
    AllEventsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class AllEventsModule { }
