import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {
  @Input() maxValue! : number;
  @Input() value! : number;
  @Input() canvasScale : number = 80;
  @Input() innerLineColor : string = '#FAFAFA';
  @Input() outerLineColor : string = '#02C389';
  @Input() innerLineWidth : number = 4;
  @Input() outerLineWidth : number = 4;
  radius! : number;
  strokeDasharray! : number;
  strokeDashoffset! : number;
  transform !: string;
  constructor() { }

  ngOnInit(): void {

    this.radius = (this.canvasScale / 2) - this.outerLineWidth;
    this.strokeDasharray = Math.PI * (this.radius * 2);
    this.strokeDashoffset = this.strokeDasharray;
    this.transform = `rotate(-90 ${this.canvasScale/2} ${this.canvasScale/2})`;

    setTimeout(()=>{
      if (this.value > this.maxValue){
        this.strokeDashoffset = 0;
      } else {
        this.strokeDashoffset = ( (this.maxValue - this.value ) / this.maxValue) * this.strokeDasharray
      }
    }, 500)



  }

}
