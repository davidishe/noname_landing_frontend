import { publish } from "rxjs/operators";
export interface IServiceItem {
  id?: string;
  content: string;
  title: string;
  isHidden?: boolean;
}
