import {
  AfterContentChecked, AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import {FullCalendarComponent} from "@fullcalendar/angular";
import {SatPopoverAnchor} from "@ncstate/sat-popover";
import {MatDialog} from "@angular/material/dialog";
import {AddEventComponent} from "../add-event/add-event.component";
import {EventDelegateComponent} from "../event-delegate/event-delegate.component";
import {EventRescheduleComponent} from "../event-details-page/event-reschedule/event-reschedule.component";
import {EventDeclineComponent} from "../event-decline/event-decline.component";
import {CancelInvitationComponent} from "../event-details-page/cancel-invitation/cancel-invitation.component";
import {EventCalendarFilterComponent} from "./event-calendar-filter/event-calendar-filter.component";

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit , AfterContentChecked , AfterViewInit{
  @ViewChild('calendar', {static: false}) calendarComponent?: FullCalendarComponent;
  @ViewChild('popover') popover?: any;
  anchor!: SatPopoverAnchor | ElementRef<HTMLElement> | HTMLElement;
  popoverPosition = {top: 0, left: 0};
  popoverClass: string = '';
  dateText: any;
  popoverContent! : {
    title: '',
    orgName: '',
    location: '',
    startDay: any,
    startTime: any,
    endTime: any,
  };
  // calenderConfig: any;
  // calendarView = new FormControl();
  calendarApi: any;
  selectedView = 'dayGridMonth';
  categories = [
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
    {
      name: 'Category'
    },
  ];

  usersAvatar = [
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


  calendarViewList = [
    {value: 'dayGridMonth', viewValue: 'Month'},
    {value: 'timeGridWeek', viewValue: 'Week'},
    {value: 'timeGridDay', viewValue: 'Day'}
  ];

  calenderConfig: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: '',center: 'prev,title,next',right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    // timeZone: 'UTC',
    // initialDate: new Date(Date.UTC(2018, 8, 1)),
    navLinkWeekClick: this.changeView,
    eventClick: this.handleEventClick.bind(this),
    events: [
      {
        title: 'Enter Title Here',
        location: 'Mursalat building twelve 2 floor 1',
        start: new Date('Sun Sep 8 2021'),
        end: new Date('Sun Sep 8 2021'),
        className: 'pending',
        orgName: 'Organization 1',
      },
      {
        title: 'Enter Title Here',
        location: 'Mursalat building twelve 2 floor 2',
        start: new Date('Sun Sep 5 2021'),
        end: new Date('Sun Sep 5 2021'),
        className: 'confirmed',
        orgName: 'Organization 2',
      },
      {
        title: 'Enter Title Here',
        location: 'Mursalat building twelve 2 floor 3',
        start: new Date('Sun Sep 5 2021'),
        end: new Date('Sun Sep 5 2021'),
        className: 'confirmed',
        orgName: 'Organization 3',
      },
      {
        title: 'Enter Title Here',
        location: 'Mursalat building twelve 2 floor 4',
        start: new Date('Sun Sep 5 2021'),
        end: new Date('Sun Sep 5 2021'),
        className: 'confirmed',
        orgName: 'Organization 4',
      },
      {
        title: 'Enter Title Here',
        location: 'Mursalat building twelve 2 floor 5',
        start: new Date(),
        end: new Date(),
        className: 'enrolled',
        orgName: 'Organization 5',
      }
    ],
  };


  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void{
    if (this.calendarApi){
      this.dateText = this.calendarApi.currentData.viewTitle
    }
  }

  ngAfterViewInit(): void{
    let calendarApi = this.calendarComponent?.getApi();
    if (calendarApi){
      this.calendarApi = calendarApi;
    }

  }

  changeView(value: any) {
    this.calendarApi.changeView(value.toString());
  }

  prev(){
    this.calendarApi.prev();
  }

  next(){
    this.calendarApi.next();
  }

  handleEventClick($event: any) {
    const {title, start, end} = $event.event;
    const {orgName, location} = $event.event._def.extendedProps
    this.popoverContent = {
      title,
      startDay: start?.toLocaleDateString('en-GB', {
        month : 'short',
        day : 'numeric',
        year : 'numeric'
      }).split(' ').join(','),
      startTime: start?.toLocaleTimeString(),
      endTime: end?.toLocaleTimeString(),
      orgName,
      location

    }
    console.log(this.popoverContent);
    this.popoverPosition = {
      top: 10,
      left: $event.el.getBoundingClientRect().left + ($event.el.getBoundingClientRect().width / 4)
    };
    this.popoverClass = $event.event.classNames[0];
    this.popover.anchor = $event.el;
    this.popover.open();
  }



  openFilters(): void {
    const dialogRef = this.dialog.open(EventCalendarFilterComponent, {
      panelClass: ['main-popup', 'filter-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {

      // console.log('The dialog was closed');
    });
  }



  editEvent(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      width: '750px',
      height: '95%',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }



  delegate(): void {
    const dialogRef = this.dialog.open(EventDelegateComponent, {
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

  reschedule(): void {
    const dialogRef = this.dialog.open(EventRescheduleComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }


  decline(): void {
    const dialogRef = this.dialog.open(EventDeclineComponent, {
      width: '650px',

      panelClass: ['main-popup'],
      data: {
        backToAddEvent : true,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }


  cancel(): void {
    const dialogRef = this.dialog.open(CancelInvitationComponent, {
      width: '650px',

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
