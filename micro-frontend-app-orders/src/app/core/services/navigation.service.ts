import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public lastSuccessfulNavigationUrl: string;

  public publishLastSuccessfulNavigationUrl(url: string): void {
    this.lastSuccessfulNavigationUrl = url;
  }
}
