import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu-research',
  templateUrl: './nav-menu-research.component.html',
  styleUrls: ['./nav-menu-research.component.scss']
})
export class NavMenuResearchComponent implements OnInit {


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
