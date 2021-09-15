import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-docs-uploader',
  templateUrl: './docs-uploader.component.html',
  styleUrls: ['./docs-uploader.component.scss']
})
export class DocsUploaderComponent implements OnInit {
  @Input() styleHeight = ''; // medium, mini
  @Input() styleWidth = '6';
  @Input() hint = '';
  @Input() label = '';
  @Input() showLabel = true;
  @Input() tooltip! : string;
  @Input() optional = false;
  @Input() display = '';


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
