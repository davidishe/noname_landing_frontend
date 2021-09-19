import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-picture',
  templateUrl: './flex-picture.component.html',
  styleUrls: ['./flex-picture.component.scss']
})
export class FlexPictureComponent implements OnInit {

  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
