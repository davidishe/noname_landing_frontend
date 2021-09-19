import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-btn-small',
  templateUrl: './mat-btn-small.component.html',
  styleUrls: ['./mat-btn-small.component.scss']
})
export class MatBtnSmallComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
