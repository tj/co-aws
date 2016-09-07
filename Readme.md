# co-aws

  AWS client for generators.

  Only EC2, S3, and SNS are supported right now, aws-sdk is massive,
  but if you feel like wrapping the rest or want to help
  maintain this library let me know!

## Installation

```
$ npm install co-aws2
```

## Example

```js
var AWS = require('co-aws2');

var aws = AWS({
  accessKeyId: conf.key,
  secretAccessKey: conf.secret,
  sslEnabled: true,
  region: 'us-west-2'
});

...
var instances = yield aws.ec2.describeInstances();

...
const localImageFileBody = yield fs.readFile(localImageFilePath);
yield s3.putObject({
    Bucket: bucket,
    Key: key,
    Body: localImageFileBody,
    ContentType: 'image/jpeg',
    ACL: 'public-read'
  });

...
yield sns.publish({
  Message: payload,
  MessageStructure: 'json',
  TargetArn: endpointArn
});

```

# License

  MIT
