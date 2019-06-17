import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../details-info/details-info.module').then(m => m.DetailsInfoModule),
      },
      {
        path: 'shipping',
        loadChildren: () => import('../details-shipping/details-shipping.module').then(m => m.DetailsShippingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsRoutingModule {
}
