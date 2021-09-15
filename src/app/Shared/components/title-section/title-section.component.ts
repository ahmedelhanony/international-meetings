import {Component, Input, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss']
})
export class TitleSectionComponent implements OnInit {

  @Input() title = '';
  @Input() tooltip = true;
  constructor(private sidenavService: SidenavService ) { }

  ngOnInit(): void {
  }


}
