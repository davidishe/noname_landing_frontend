import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { BusyService } from 'src/app/services/infrastructure/busy.service';
import { BasketService } from '../../content/basket/basket.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { IServiceItem } from 'src/app/shared/models/data/item';
import { interval, Subscription } from 'rxjs';





@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {


  userId = +localStorage.getItem('userId');
  items: IServiceItem[];

  constructor(
    public basketService: BasketService,
    private itemService: ItemsService,
    public busyService: BusyService,
    private cdr: ChangeDetectorRef
  ) { 
  }




  ngOnInit(): void {
    this.getAllProdcutsForMainPage();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();



  }

  getAllProdcutsForMainPage(): void {
    this.itemService.getAllItems().subscribe((response: any) => {
      this.items = response;
    
    }, error => {
      console.log(error);
    });
  }


}
