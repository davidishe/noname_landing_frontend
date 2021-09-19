import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu-revue',
  templateUrl: './nav-menu-revue.component.html',
  styleUrls: ['./nav-menu-revue.component.scss']
})
export class NavMenuRevueComponent implements OnInit {


  @Input() text: string;
  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

  logout(): void {
    
  }

}
