Envelope 
==============================================================================================

Fully functional Angular app acting as a shell for micro apps

---
#### Technologies and tools used

- [Angular](https://angular.io/) with use of [Angular Elements](https://angular.io/guide/elements)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

Current status:
- :heavy_check_mark: Angular 8
- :heavy_check_mark: Lazy loading
- :heavy_check_mark: External bundles loaded once at startup, lightweight micro apps
- :x: Ivy support (https://github.com/angular/angular/issues/30262#issuecomment-497101996)
- :x: Angular router fully working

---
#### Setup / Usage / How to

###### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.
You can also test production setup running `npm run start:prod`

###### Build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.

###### Serve production build statics (not production ready)

Run `npm run server`

###### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---
#### Areas for improvements

- Angular routing: some global actions (_back_ and _forward_ action behaviour) 
are being caught by all Angular micro-apps currently run in single web page
