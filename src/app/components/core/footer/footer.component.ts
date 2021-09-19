import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  loaded: boolean;
  constructor() { }


  ngOnInit() {
    this.loaded = false;
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

}
