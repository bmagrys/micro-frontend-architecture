import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsShippingComponent } from './details-shipping.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsShippingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsShippingRoutingModule {
}
