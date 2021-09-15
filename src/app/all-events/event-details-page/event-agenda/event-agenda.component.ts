import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-event-agenda',
  templateUrl: './event-agenda.component.html',
  styleUrls: ['./event-agenda.component.scss']
})
export class EventAgendaComponent implements OnInit {
  agendaItems = [
    'Title Number I',
    'Title Number II',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.agendaItems, event.previousIndex, event.currentIndex);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
