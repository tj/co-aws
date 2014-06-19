
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');

/**
 * Expose `Client`.
 */

/**
 * Wrap `obj` methods.
 */

module.exports = function wrap(obj) {
  Object.keys(obj.__proto__).forEach(function(key){
    var val = obj.__proto__[key];
    if ('constructor' == val) return;
    if ('function' != typeof val) return;
    obj[key] = thunkify(obj[key]);
  });
  return obj;
}
