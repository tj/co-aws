# co-aws

  AWS client for generators.

  Only EC2, S3, SES and SNS are supported right now, aws-sdk is massive,
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
yield aws.s3.putObject({
    Bucket: bucket,
    Key: key,
    Body: localImageFileBody,
    ContentType: 'image/jpeg',
    ACL: 'public-read'
  });

...
const message = 'Hey, here\'s a notification!';
const endpointResult = yield aws.sns.createPlatformEndpoint({
  PlatformApplicationArn: applicationArn,
  Token: devicePushToken
});
yield aws.sns.publish({
  Message: { default: message },
  MessageStructure: 'json',
  TargetArn: endpointResult.EndpointArn
});

...
yield aws.ses.sendEmail({
  Source: fromEmailAddress,
  Destination: { ToAddresses: toEmailAddressArray },
  Message: {
    Subject: {
      Data: subject
    },
    Body: {
      Text: {
        Data: bodyText
      },
      Html: {
        Data: bodyHTML
      }
    }
  }
});

```

# License

  MIT
