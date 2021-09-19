import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu-mobile',
  templateUrl: './nav-menu-mobile.component.html',
  styleUrls: ['./nav-menu-mobile.component.scss']
})
export class NavMenuMobileComponent implements OnInit {


  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }



}
