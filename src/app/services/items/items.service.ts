import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServiceItem } from 'src/app/shared/models/data/item';
import { IPagination, Pagination } from 'src/app/shared/models/pagination';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl = environment.apiUrl;
  items: IServiceItem[] = [];
  storedItems: IServiceItem[] = [];

  constructor(private http: HttpClient) {}

  getAllItems() {
    if (this.items.length === 0) {
      return this.http.get<any>(this.baseUrl + 'items/all');
    }
  }

  setItemsInStore(items: IServiceItem[]) {
    items.forEach(item => {
      this.storedItems.push(item);
    });
  }

  getItemsInStore() {
    return this.storedItems;
  }




}
