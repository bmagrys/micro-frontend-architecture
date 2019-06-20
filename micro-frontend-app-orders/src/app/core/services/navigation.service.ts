import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private lastSuccessfulNavigationUrl: string;

  public setLastSuccessfulNavigationUrl(url: string): void {
    this.lastSuccessfulNavigationUrl = url;
  }

  public getLastSuccessfulNavigationUrl() {
    return this.lastSuccessfulNavigationUrl;
  }
}
