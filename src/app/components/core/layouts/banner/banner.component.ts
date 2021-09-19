import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, rotateIn } from 'ng-animate';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn,
      { params: { timing: 0.8, delay: 1.4 }}))])
  ],
})
export class BannerComponent implements OnInit {

  rotateIn: any;
  constructor() { }

  ngOnInit() {
  }

}
