import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MicroAppComponent } from './component/micro-app/micro-app.component';
import { NavComponent } from './component/nav/nav.component';

import { EnvelopeRoutingModule } from './envelope-routing.module';
import { EnvelopeComponent } from './envelope.component';

@NgModule({
  declarations: [
    NavComponent,
    MicroAppComponent,
    EnvelopeComponent,
  ],
  imports: [
    CommonModule,
    EnvelopeRoutingModule,
  ],
})
export class EnvelopeModule {
}
