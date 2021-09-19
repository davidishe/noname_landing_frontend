import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollMenuService {

  constructor() { }


  setUserNavMenu(): void {
    const userAcc = document.getElementById('userinfo');
    const topMenu = document.getElementById('top_menu');

    const userAccLeft = userAcc.offsetLeft;
    const left = (userAccLeft - 60) + 'px';
    topMenu.style.left = left;
  }

}
