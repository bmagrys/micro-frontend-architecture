import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EnvelopeRoutingModule} from './envelope-routing.module';
import {EnvelopeComponent} from './envelope.component';
import {NavComponent} from "./component/nav/nav.component";
import {MicroAppComponent} from "./component/micro-app/micro-app.component";

@NgModule({
  declarations: [
    NavComponent,
    MicroAppComponent,
    EnvelopeComponent,
  ],
  imports: [
    CommonModule,
    EnvelopeRoutingModule
  ]
})
export class EnvelopeModule {
}
