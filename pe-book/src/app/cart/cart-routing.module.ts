import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';


const routes: Routes = [
  {
    path: 'shop',
    component: CartComponent
  },
  {
    path: 'order',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
