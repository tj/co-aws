
# co-aws

  AWS client for generators.

  Only EC2 is supported right now, aws-ec2 is massive,
  but if you feel like wrapping the rest or want to help
  maintain this library let me know! I just need EC2 for now.

## Installation

```
$ npm install co-aws2
```

## Example

```js
var AWS = require('co-aws');

var aws = AWS({
  accessKeyId: conf.key,
  secretAccessKey: conf.secret,
  sslEnabled: true,
  region: 'us-west-2'
});

...
var instances = yield aws.ec2.describeInstances();
```

# License

  MIT