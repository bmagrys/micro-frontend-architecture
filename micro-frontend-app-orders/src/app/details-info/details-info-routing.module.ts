import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsInfoComponent } from './details-info.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsInfoRoutingModule {
}
