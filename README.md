# @hrgui/google-cloud-pubsub-emulator-test

The point of this demo is to test Google Cloud Pubsub Emulator with https://github.com/googleapis/nodejs-pubsub.

# Running this
1. `docker-compose up -d`. The emulator will be running on port 8538.
2. Run `publisher.js` if not done yet to create the topic.
3. Run `subscriber.js` to have a listener for messages.

We can continually create messages by running `publisher.js`


# Issues

When declaring PubSub, we need the project id.
```
const pubsub = new PubSub({projectId: 'moot'});
```

This will be fixed when https://github.com/googleapis/nodejs-pubsub/pull/731/files is resolved.