import * as myLib from './lib/app.js';
import { helper } from './lib/app.js';

/**
 * Main components
 */
(function (factory) {
  factory();
})(function () {
  'use strict';

  console.log(myLib.sum(3, 0.14));

  myLib.helper.echo('Hello');

  helper.echo('World!');

  $(function () {
    $(document.body).text(myLib.pi);
  });
});
