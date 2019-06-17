import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    CommonModule,
    OrderDetailsRoutingModule,
  ],
})
export class OrderDetailsModule {
}
