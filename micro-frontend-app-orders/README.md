Orders 
==============================================================================================

### Fully functional Angular app as Web Component / Custom Element 

Can be hosted separately and referenced at runtime in Envelope app.

---
#### Technologies and tools used

- [Angular](https://angular.io/) with use of [Angular Elements](https://angular.io/guide/elements)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)

Current status:
- :heavy_check_mark: Angular 8
- :heavy_check_mark: Lazy loading
- :x: Ivy support
- :x: Angular router fully working

---
#### Pros:

- Tiny, small projects where business cases / domains are separated
(let's say, some kind of microservices on frontend)
- Fast, independent builds and feature delivery, deployment per micro application,
- Much less conflicts comparing to one monolith app developed by multiple teams,
- Content not loaded, until used (lazy loading of micro applications / components,
  regardless of the technologies used inside),
- Easier to maintain, move to another project, rewrite, delete from the whole system.

#### Cons:

- Can be sometimes too coupled to Web Component / Angular Elements specifics,
- Boilerplate in every app to handle architecture,
- Bundle sizes are not that small,
- Angular Router is not designed for such cases and requires workarounds,
- Requires maintenance of additional Envelope app and shared services, guards etc.
  which is sometimes barely related to business cases, can be time-consuming
  and hard to debug,
- The less people work on the whole solution, the less it pays off,
- Too complex and over-designed solution if whole application and business
  cases are quite simple.

---
#### Setup / Usage / How to

###### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4201/`.
The app will automatically reload if you change any of the source files.
You can also test production setup running `npm run start:prod`

###### Build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.
Use `npm run build:gateway-model` if you are using some kind of gateway also 
for frontend assets and relative request path contexts are redirected 
deep into the infrastructure.

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
