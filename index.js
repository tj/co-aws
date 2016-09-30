
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');
var assert = require('assert');
var aws = require('aws-sdk');

/**
 * Expose `Client`.
 */

module.exports = Client;

/**
 * AWS client.
 *
 * @param {Object} [opts]
 * @api public
 */

function Client(opts) {
  if (!(this instanceof Client)) return new Client(opts);

  // global?
  aws.config.update(opts);

  // wayyyy more to support...
  this.ec2 = new aws.EC2;
  wrap(this.ec2);

  this.s3 = new aws.S3;
  wrap(this.s3);

  this.sns = new aws.SNS;
  wrap(this.sns);

  this.ses = new aws.SES;
  wrap(this.ses);
}

/**
 * Wrap `obj` methods.
 */

function wrap(obj) {
  Object.keys(obj.__proto__).forEach(function(key){
    var val = obj.__proto__[key];
    if ('constructor' == val) return;
    if ('function' != typeof val) return;
    obj[key] = thunkify(obj[key]);
  });
}
