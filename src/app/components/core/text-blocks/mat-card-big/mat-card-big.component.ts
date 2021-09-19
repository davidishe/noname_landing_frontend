import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { rotateIn } from 'ng-animate';

@Component({
  selector: 'app-mat-card-big',
  templateUrl: './mat-card-big.component.html',
  styleUrls: ['./mat-card-big.component.scss'],
  animations: [
    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn,
      { params: { timing: 0.8, delay: 1.4 }}))])
  ],
})
export class MatCardBigComponent implements OnInit {

  rotateIn: any;

  constructor() { }

  ngOnInit() {
  }

}
