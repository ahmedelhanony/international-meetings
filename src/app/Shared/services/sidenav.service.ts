import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public subject = new Subject<{}>();
  public sideNavOpened = new BehaviorSubject(false);
  constructor() { }

  publish(eventName: string, componentName: any  , position: any = 'end', mode: any = 'over') {
    this.subject.next({ eventName, componentName, position, mode });
  }

}
