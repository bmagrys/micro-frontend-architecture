import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: environment.APP_URL,
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  },
  // Render nothing if navigation goes to other app
  {
    path: '**',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
