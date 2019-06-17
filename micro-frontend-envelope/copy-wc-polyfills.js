// This script copies over some polyfills to the project's assets folder
const copy = require('copy');

console.log('Copy webcomponent polyfills ...');

copy('node_modules/@webcomponents/**/*.js', 'src/assets', {}, _ => {});
