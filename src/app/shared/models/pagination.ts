import { IServiceItem } from './data/item';
import { IProduct } from './products/product';

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IServiceItem[];
}

export class PaginatedResult<T> {
  result2: T;
  pagination2: IPagination;
}

export class Pagination implements IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IServiceItem[];
}



