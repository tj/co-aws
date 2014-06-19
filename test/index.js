
var read = require('fs').readFileSync;
var AWS = require('aws-sdk');
var coAWS = require('..');
var co = require('co');

// make tests that other people
// can actually run :)

var conf = require(process.env.HOME + '/.ec2/segment.json');

AWS.config.update({
  accessKeyId: conf.key,
  secretAccessKey: conf.secret,
  sslEnabled: true,
  region: 'us-west-2'
});

var ec2 = coAWS(new AWS.ec2()); // could also pass in, etc.: new AWS.S3()

describe('wrap', function(){
  it('should be wrapped', function(done){
    co(function *(){
      var res = yield ec2.describeInstances();
      res.should.have.property('Reservations');
    })(done);
  })
})
