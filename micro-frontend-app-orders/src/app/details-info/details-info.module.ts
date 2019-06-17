import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsInfoRoutingModule } from './details-info-routing.module';
import { DetailsInfoComponent } from './details-info.component';

@NgModule({
  declarations: [DetailsInfoComponent],
  imports: [
    CommonModule,
    DetailsInfoRoutingModule,
  ],
})
export class DetailsInfoModule {
}
