Micro-app frontend architecture (experimental) examples and templates of various approaches
============================================================================

[![Join the chat at https://gitter.im/micro-frontend-architecture/community](https://badges.gitter.im/micro-frontend-architecture/community.svg)](https://gitter.im/micro-frontend-architecture/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

At this moment, this example consists of a few Angular projects demonstrating
an implementation of a main application called Envelope and micro applications
that can be attached not only at the build time (micro application as a _feature library_),
but above all, <ins>dynamically at runtime</ins> (from external sources eg. CDN, dedicated gateway).

The business case used as an example here is Administration Panel for an E-commerce system.

Example consists of following projects:
- Envelope `/micro-frontend-envelope`: Starting application with layout and main navigation that aggregates other apps. That's entry layer for every nested content in panel [(read more)](./micro-frontend-envelope/README.md),
- Orders `/micro-frontend-app-orders`: Demo micro application which acts as Orders section
  - Micro-app model where bundles can be hosted separately and referenced at runtime in Envelope app [(read more)](./micro-frontend-app-orders/README.md),
- (more coming soon)

![](showcase.gif)

---
#### Assumptions

- **No coupling with external frameworks and libraries dedicated
to micro-frontend architecture**,
- The quality of the micro application code shouldn't be drastically reduced
due to the adaptation to the technology used to attach micro applications to
the envelope application. 
- Micro applications can't be (very) toughly coupled to the technologies used
only for attaching them to envelope. They should be easy to rewrite
to a traditional model in case of problems with architecture. Developing such
apps shouldn't be a one-way ticket.

---
#### Potential use cases / Pros / Cons

- Multi-domain, big projects, especially if multiple teams are working on 
separate, complicated domains or are skilled in different technologies 
(Angular / React / Vue.js),
- Frequently changing website content, driven by A/B tests or AI decisions,
when replacement at runtime has more pros compared to building dedicated release bundles
and lets deliver features faster
- Web content management systems (CMSs/WCMSs)

Pros and cons differs depending on which exact micro-frontend model is used.
They are listed in concrete projects.

---
#### All technologies and tools used across projects

- Newest [Angular 8](https://angular.io/)
  - Going beyond typical use cases of [Angular Elements](https://angular.io/guide/elements)
  - Envelope and all micro applications compatible with [Lazy Loading Feature Modules](https://angular.io/guide/lazy-loading-ngmodules)
    and [Angular Routing & Navigation](https://angular.io/guide/router)
  - Extended Angular CLI possibilities without ejecting thanks to [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

---
#### Setup / Usage / How to

In every project:

```
npm install
```

Development of Envelope or any single micro application can be independent and easy as default:

```
npm run start
```

To run all together:

1. Build and host bundles of every micro app that you want to test:

    ```
    npm run build
    npm run server
    ``` 

2. Serve or build Envelope application:

    For development and live-reload:
    
    ```
    npm run start
    ```
    
    Production:
    
    ```
    npm run bundle
    npm run server 
    ```
