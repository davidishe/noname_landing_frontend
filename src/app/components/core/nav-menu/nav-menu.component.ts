import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ScrollMenuService } from 'src/app/services/styling/scroll-menu.service';
import { IUser } from 'src/app/shared/models/user/user';
import { AccountService } from '../../layouts/account/account.service';

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}


// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent implements OnInit, OnDestroy, AfterViewInit {


  currentUser$: Observable<IUser>;

  // toast variables
  toastVisibility = true;

  color$: string;

  toastStatus: Subscription;
  toastVisibility$: boolean;

  message$: string;
  toastMessage: Subscription;

  status$: string;

  // menu variables
  isMenuOpen: boolean;
  menuBlock: number;
  topMenu: boolean = true;
  isSearching: boolean;


  scrollMenuVisibilitty: boolean = true;




  constructor(
    private accountService: AccountService,
    public scrollMenuService: ScrollMenuService
  ) {  }

  // @HostListener('window:pointermove', ['$event'])
  // onDocumentMousewheelEvent(event): void {
  //   this.setUserNavMenu();
  // }

  @HostListener('window:click', ['$event'])
  onCloseTopMenu(event): void {
    this.scrollMenuService.setUserNavMenu();
    if (!event.target.id.includes('userinfo')) {
      this.scrollMenuVisibilitty = true;
    }
  }


  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.menuBlock = 0;
  }

  ngOnDestroy(): void {
    this.toastStatus.unsubscribe();
    this.toastMessage.unsubscribe();
  }


  toogleMenu(event: any, num: number): void {
    if (event && !event.view.navigator.userAgent.includes('iPad')) {

      // для десктопа
      if (this.menuBlock === num) {
        console.log('set menu block to 0');
        this.menuBlock = 0;
        // this.enableScroll();
      } else {
        this.menuBlock = num;
        // this.disableScroll();
      }

      // для мобильной верстки
    } else {
      console.log(event);

      if (event.type === 'click' && this.menuBlock !== num) {
        this.menuBlock = num;
      } else {
        this.menuBlock = 0;
      }
    }

  }


  isMenuActive(menuNum: number): boolean {
    if (menuNum === this.menuBlock) {
      this.menuBlock = menuNum;
      return true;
    } else {
      return false;
    }
  }

  closeMenu(): void {
    this.menuBlock = 0;
    // this.enableScroll();
  }

  // disableScroll(): void {
  //   // window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  //   // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  //   // // window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  //   // window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  // }

  // call this to Enable
  // enableScroll(): void {
  //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
  //   window.removeEventListener(wheelEvent, preventDefault, false);
  //   window.removeEventListener('touchmove', preventDefault, false);
  //   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  // }

  ngAfterViewInit(): void {
    window.addEventListener('mouseover', (event: any) => {
      if (event !== null) {
        if (
            event.target.className.includes('nav-app') ||
            event.target.className.includes('wrapper') ||
            event.target.className.includes('nav-title') ||
            event.target.className.includes('nav-app') ||
            event.target.className.includes('nav-item-link') 
            &&
            !event.target.className.includes('overlay')
        ) {
          this.closeMenu();
        }
      }
    });

      window.addEventListener('click', (event: any) => {
      if (event !== null) {
        if (
            event.target.className === 'menu'
        ) {
          this.closeMenu();
        }
      }
    });


  }


  checkOnSearching(resultFromSearchComponent): void {
    if (!resultFromSearchComponent) {
      this.isSearching = resultFromSearchComponent;
    }
  }


  displayCounter(resultFromChild): void {
    console.log(resultFromChild);
    if (resultFromChild) {
      this.closeMenu();
    }
  }

  logout(): void {
    this.accountService.logout();
  }





}
