import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-add-event-agenda',
  templateUrl: './add-event-agenda.component.html',
  styleUrls: ['./add-event-agenda.component.scss']
})
export class AddEventAgendaComponent implements OnInit {
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
