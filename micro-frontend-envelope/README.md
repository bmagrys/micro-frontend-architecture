Envelope 
==============================================================================================

Fully functional Angular app acting as a shell for micro apps

---
#### Technologies and tools used

- [Angular](https://angular.io/) with use of [Angular Elements](https://angular.io/guide/elements)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)

Current status:
- :heavy_check_mark: Angular 8
- :heavy_check_mark: Lazy loading
- :heavy_check_mark: External bundles loaded once at startup, lightweight micro apps
- :heavy_check_mark: Angular router fully working (:grey_exclamation: with additional boilerplate in other micro apps)
- :x: Ivy compiler [[not supported yet]](https://github.com/angular/angular/issues/30262#issuecomment-497101996)

---
#### Setup / Usage / How to

###### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.
You can also test production setup running `npm run start:prod`

###### Build

Run `npm run bundle` to copy needed assets and build the project.
The build artifacts will be stored in the `dist/` directory.

###### Serve production build statics

Run `npm run server`

###### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---
#### Areas for improvements

- Angular routing: some global actions (_back_ and _forward_ action behaviour) 
are being caught by all Angular micro-apps currently run in single web page
