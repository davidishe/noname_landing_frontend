import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-button-hover',
  templateUrl: './mat-button-hover.component.html',
  styleUrls: ['./mat-button-hover.component.scss']
})
export class MatButtonHoverComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = "black";
  }

}
