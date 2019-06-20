import { Component, OnInit } from '@angular/core';

// Provided at build time, depends if you load micro apps
// from relative context or directly from other domain / port
declare const SOURCES_URL_PREFIX: string;

@Component({
  selector: 'app-envelope-micro-app',
  template: `<div id="micro-app-web-component">There should render micro-app!</div>`,
})
export class MicroAppComponent implements OnInit {
  private readonly CUSTOM_ELEMENT_CONTAINER_ID = 'micro-app-web-component';

  private appSelector = 'app-micro-frontend-orders-root';
  private appUrlPrefix = `${ SOURCES_URL_PREFIX }/micro-frontend-app-orders`;

  public ngOnInit() {
    const content = document.getElementById(this.CUSTOM_ELEMENT_CONTAINER_ID);
    if (!this.isRegistered(this.appSelector)) {
      // tslint:disable-next-line:no-console
      console.debug(`Loading Web Component ${ this.appSelector } from ${ this.appUrlPrefix }`);
      this.loadScripts(content, this.appUrlPrefix);
    } else {
      // tslint:disable-next-line:no-console
      console.debug(`Web Component ${ this.appSelector } already loaded!`);
    }

    const element: HTMLElement = document.createElement(this.appSelector);
    content.innerHTML = '';
    content.appendChild(element);
  }

  private loadScripts(containerElement: HTMLElement, url: string) {
    for (const standard of ['es5', 'es2015']) {
      const script = document.createElement('script');
      script.src = `${ url }/main-${ standard }.js`;
      if ('es5' === standard) {
        script.noModule = true;
      } else if ('es2015' === standard) {
        script.type = 'module';
      }
      containerElement.appendChild(script);
      script.onerror = () => {
        throw new Error(`Error occurred when loading ${ url }`);
      };
    }
  }

  private isRegistered(name) {
    return document.createElement(name).constructor !== HTMLElement;
  }
}
