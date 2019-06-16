import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsShippingRoutingModule } from './details-shipping-routing.module';
import { DetailsShippingComponent } from './details-shipping.component';

@NgModule({
  declarations: [DetailsShippingComponent],
  imports: [
    CommonModule,
    DetailsShippingRoutingModule
  ]
})
export class DetailsShippingModule { }
