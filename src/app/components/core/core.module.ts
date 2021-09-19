import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LayerComponent } from './layer/layer.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { OrderTotalComponent } from './order-total/order-total.component';
import { RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { DateAgoPipe } from 'src/app/pipes/time-ago.pipe';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { MatButtonComponent } from './buttons/mat-button/mat-button.component';
import { ProductMatCardComponent } from './products/product-mat-card/product-mat-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DadataAddressComponent } from './dadata-address/dadata-address.component';
import { NavMenuRevueComponent } from './nav-menu/nav-menu-open/nav-menu-revue/nav-menu-revue.component';
import { NavMenuMobileComponent } from './nav-menu/nav-menu-open/nav-menu-mobile/nav-menu-mobile.component';
import { NavMenuResearchComponent } from './nav-menu/nav-menu-open/nav-menu-research/nav-menu-research.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { MatCardHeroComponent } from './text-blocks/mat-card-hero/mat-card-hero.component';
import { TitleComponent } from './text-blocks/title/title.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { IMaskModule } from 'angular-imask';
import { FooterComponent } from './footer/footer.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonHoverComponent } from './buttons/mat-button-hover/mat-button.component';
import { MatCardBigComponent } from './text-blocks/mat-card-big/mat-card-big.component';
import { MatBtnSmallComponent } from './buttons/mat-btn-small/mat-btn-small.component';
import { SearchComponent } from './search/search.component';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';
import { AnimatedDigitGridComponent } from './animated-digit-grid/animated-digit-grid.component';
import { MatCarouselComponent } from './mat-carousel/mat-carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BlogComponent } from './layouts/blog/blog.component';
import { TeamComponent } from './layouts/team/team.component';
import { SmmComponent } from './layouts/smm/smm.component';


const UserComponents = [
  DadataAddressComponent,
  NavMenuRevueComponent,
  NavMenuMobileComponent,
  NavMenuResearchComponent,
  BannerComponent,
  MatCardHeroComponent,
  MatCardBigComponent,
  TitleComponent,
  FeedbackComponent,
  FooterComponent,
  MatButtonHoverComponent,
  MatBtnSmallComponent,
  SearchComponent,
  AnimatedDigitComponent,
  AnimatedDigitGridComponent,
  MatCarouselComponent,
  BlogComponent,
  TeamComponent,
  SmmComponent
]

@NgModule({
  declarations: [
    PageHeaderComponent,
    LayerComponent,
    OrderTotalComponent,
    StepperComponent,
    DateAgoPipe,
    ProductCardComponent,
    MatButtonComponent,
    ProductMatCardComponent,
    UserComponents

  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    IMaskModule,
    Ng2CarouselamosModule

  ],
  exports: [
    PageHeaderComponent,
    OrderTotalComponent,
    StepperComponent,
    ProductCardComponent,
    UserComponents,

    DateAgoPipe,

    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BreadcrumbModule,
    LayerComponent,
    MatButtonComponent,
    ProductMatCardComponent,
  ]
})
export class CoreModule { }
