module.exports = {
  output: {
    jsonpFunction: 'jsonpFunction' + Math.random().toString(36).slice(2)
  },
  "externals": {
    "rxjs": "rxjs",
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/elements": "ng.elements",
    "@angular/router": "ng.router"
  }
};
