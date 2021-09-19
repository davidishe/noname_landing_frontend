import { Component, Input, OnInit } from '@angular/core';
import { IServiceItem } from 'src/app/shared/models/data/item';
import { transition, trigger, useAnimation } from '@angular/animations';


@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss']
})

export class ItemsGridComponent implements OnInit {

  show: boolean;
  fadeIn: any;
  @Input() items: IServiceItem[];

  constructor() {
    
  }

  ngOnInit() {
    this.show = false;
    this.onSearch();
  }


  toogleShow() {
    this.show = !this.show;

  }


  onSearch() {
    let results = undefined;
    console.log(results);
  }

}

