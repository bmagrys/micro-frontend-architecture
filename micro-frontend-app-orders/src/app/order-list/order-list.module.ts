import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { OrderListService } from './services/order-list.service';

@NgModule({
  providers: [OrderListService],
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrderListRoutingModule,
  ],
})
export class OrderListModule {
}
