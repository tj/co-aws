
var read = require('fs').readFileSync;
var AWS = require('..');
var co = require('co');

// make tests that other people
// can actually run :)

var conf = require(process.env.HOME + '/.ec2/segment.json');

var aws = AWS({
  accessKeyId: conf.key,
  secretAccessKey: conf.secret,
  sslEnabled: true,
  region: 'us-west-2'
});

describe('ec2', function(){
  it('should be wrapped', function(done){
    co(function *(){
      var res = yield aws.ec2.describeInstances();
      res.should.have.property('Reservations');
    })(done);
  })
})