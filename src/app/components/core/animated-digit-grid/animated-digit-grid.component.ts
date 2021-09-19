import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'animated-digit-grid',
  templateUrl: './animated-digit-grid.component.html',
  styleUrls: ['./animated-digit-grid.component.scss']
})
export class AnimatedDigitGridComponent implements OnInit {

  loaded: boolean = false;
  @Input() values: number[] = [300, 2500, 30, 20];

  constructor() { }

  @ViewChild('testDiv', {static: false}) private testDiv: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.testDiv && !this.loaded){
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
    }

    if (this.isTestDivScrolledIntoView) {
      this.loaded = true;
    }
  }



  ngOnInit() {
  }

}
