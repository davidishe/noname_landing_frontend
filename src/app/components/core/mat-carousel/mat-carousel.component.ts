import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'mat-carousel',
  templateUrl: './mat-carousel.component.html',
  styleUrls: ['./mat-carousel.component.scss']
})
export class MatCarouselComponent implements OnInit {

  items: Array<any> = [];
  today: Date = new Date();
  width: number;

  constructor() { }

  ngOnInit(): void {
    this.initCarouselItems();
    this.width = window.innerWidth;
    this.calculateCarouselWidth();
  }

  @HostListener('window:resize') calculateCarouselWidth(): void {
    this.width = window.innerWidth;
  }


  initCarouselItems(): void {
    this.items = [
        { title: 'Nike', path: 'nike.png', enrolledDate: this.today},
        { title: 'Reebok', path: 'reebok.png', enrolledDate: this.today},
        { title: 'Adidas', path: 'adidas.png', enrolledDate: this.today},
        { title: 'Рога и копыта', path: 'ember.png', enrolledDate: this.today},
        { title: 'Ebay', path: 'ebay.png', enrolledDate: this.today},
        { title: 'Amazon', path: 'aws.png', enrolledDate: this.today},
        // { title: 'Продукт', path: 'product_header_2.png', enrolledDate: this.today},
        // { title: '0', path: 'product_header_1.png', enrolledDate: this.today},
        // { title: '1', path: 'product_header_0.png', enrolledDate: this.today},
        // { title: '2', path: 'product_header_1.png', enrolledDate: this.today},
        // { title: '3', path: 'product_header_2.png', enrolledDate: this.today},
        // { title: 'Last', path: 'product_header_1.png', enrolledDate: this.today},
    ];

  }


}
