import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/core/guards/auth.guard';
import { HeroComponent } from './components/layouts/hero/hero.component';
import { AboutComponent } from './components/content/about/about.component';


const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full', data: {breadcrumb: 'Магазин'} },

  { path: 'basket', loadChildren: () => import('./components/content/basket/basket.module').then(mod => mod.BasketModule),
  data: {breadcrumb: 'Корзина'}},

  { path: 'about', component: AboutComponent },

  { path: 'checkout', loadChildren: () => import('./components/content/checkout/checkout.module').then(mod => mod.CheckoutModule),
  canActivate: [AuthGuard], data: {breadcrumb: 'Оформление заказа'}},

  { path: 'account', loadChildren: () => import('./components/layouts/account/account.module').then(mod => mod.AccountModule),
  data: {breadcrumb: {skip: true}}},


  { path: 'orders', loadChildren: () => import('./components/content/orders/orders.module').then(mod => mod.OrdersModule),
  canActivate: [AuthGuard]},




];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
