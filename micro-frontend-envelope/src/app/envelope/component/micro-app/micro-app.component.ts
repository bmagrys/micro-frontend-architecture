import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envelope-micro-app',
  template: `
    <div id="micro-app-web-component">There should render micro-app!</div>`,
})
export class MicroAppComponent implements OnInit {
  private CUSTOM_ELEMENT_CONTAINER_ID = 'micro-app-web-component';
  private appSelector = 'app-micro-frontend-orders-root';
  private appUrlPrefix = 'http://localhost:8201/micro-frontend-app-orders';

  constructor() {
  }

  public ngOnInit() {
    const content = document.getElementById(this.CUSTOM_ELEMENT_CONTAINER_ID);
    if (!this.isRegistered(this.appSelector)) {
      // tslint:disable-next-line:no-console
      console.debug(`Loading Web Component ${ this.appSelector } from ${ this.appUrlPrefix }`);
      this.loadScripts(content, this.appUrlPrefix);
    } else {
      // tslint:disable-next-line:no-console
      console.debug('Web Component {} already loaded', this.appSelector);
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
