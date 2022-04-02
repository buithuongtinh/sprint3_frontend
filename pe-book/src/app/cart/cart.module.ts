import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHistoryComponent } from './order-history/order-history.component';



@NgModule({
  declarations: [CartComponent, OrderDetailComponent, OrderHistoryComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgxPayPalModule
  ]
})
export class CartModule { }
