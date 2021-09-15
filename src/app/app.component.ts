import { Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidenavService} from "./Shared/services/sidenav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'starter-angular';
  @ViewChild('sidenav', {static: true}) public sidenav!: MatSidenav;
  sideContent: any;
  constructor(private sidenavService:SidenavService) {}

  ngOnInit(): void {
    // console.log(this.sidenav)
    // this.sidenav.closedStart.subscribe(()=>{
    //   this.sidenavService.sideNavOpened.next(false)
    // })
    // this.sidenav.openedStart.subscribe(()=>{
    //   this.sidenavService.sideNavOpened.next(true)
    // })
    this.sidenavService.subject.subscribe((value: any) => {
      // console.log(value.componentName);
      this.sideContent = value.componentName;


      // this.sideContent = value.componentName ? value.componentName : MenuComponent;
      // console.log(this.sideContent)
      // value.componentName ? this.sideContent = value.componentName : MenuComponent

      this.sidenav.mode = value.mode;
      this.sidenav.position = value.position;



      if (value.eventName === 'open'){
        this.openSideNav();

      } else {
        this.closeSideNav();

      }

    })
  }

  private openSideNav(){
    this.sidenav.open();
  }

  private closeSideNav(){
    this.sidenav.close();
  }



}
