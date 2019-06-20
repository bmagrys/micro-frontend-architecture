import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationService } from './core/services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector,
              private readonly navigationService: NavigationService,
              private readonly router: Router) {
    // Module will never be implicitly destroyed, so there we can save all Router events
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Catch only micro app routes
        if (event.url.startsWith(`/${ environment.APP_URL }`)) {
          // Uncomment to see tracing
          // console.log('[Orders] setLastSuccessfulNavigationUrl', event.url);
          this.navigationService.setLastSuccessfulNavigationUrl(event.url);
        }
      }
    });
  }

  public ngDoBootstrap() {
    const myElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-micro-frontend-orders-root', myElement);
  }
}
