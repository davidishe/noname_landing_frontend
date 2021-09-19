import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-card-hero',
  templateUrl: './mat-card-hero.component.html',
  styleUrls: ['./mat-card-hero.component.scss']
})
export class MatCardHeroComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
  }

}
