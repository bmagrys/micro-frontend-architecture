import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnvelopeComponent} from "./envelope.component";
import {MicroAppComponent} from "./component/micro-app/micro-app.component";

const routes: Routes = [{
  path: '',
  component: EnvelopeComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: MicroAppComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvelopeRoutingModule {
}

