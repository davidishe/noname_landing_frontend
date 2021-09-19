import { HAMMER_LOADER, BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CoreModule } from './components/core/core.module';
import { TypesService } from './services/products/types.service';
import { RegionsService } from './services/products/regions.service';
import { JwtInterceptor } from './components/core/interceptors/jwt.interceptor';
import { HeroComponent } from './components/layouts/hero/hero.component';
import { ErrorInterceptor } from './components/core/interceptors/error.interceptor';
import { BusyService } from './services/infrastructure/busy.service';
import { LoadingInterceptor } from './components/core/interceptors/loading.interceptor';
import { ScrollMenuComponent } from './components/core/scroll-menu/scroll-menu.component';
import { NavMenuComponent } from './components/core/nav-menu/nav-menu.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { IMaskModule } from 'angular-imask';
import { MapComponent } from './components/core/map/map.component';
import { AboutComponent } from './components/content/about/about.component';
import { ItemsGridComponent } from './components/layouts/items-grid/items-grid.component';
import { ItemsService } from './services/items/items.service';
import { RouterLinkWithHref } from '@angular/router';
import { InView } from './directives/in-view.directive';




registerLocaleData(localeRu, 'ru');

const UserComponents = [
  AppComponent,
  NavMenuComponent,
  HeroComponent,
  ScrollMenuComponent,
  MapComponent,
  AboutComponent,
  ItemsGridComponent,
  InView
]

const UserModules = [
  
]

const UserServices = [
  MessageService,
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},

  TypesService,
  RegionsService,
  ItemsService,
  BusyService,
  {
    provide: HAMMER_LOADER,
    useValue: () => new Promise(() => {})
  },
  { provide: LOCALE_ID, useValue: 'ru' },
]

@NgModule({
  declarations:
  [
    UserComponents
  ],

  imports:
  [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    UserModules
  ],

  exports: [
    
  ],

  providers: [
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
