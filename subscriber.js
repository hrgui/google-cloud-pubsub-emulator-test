process.env.PUBSUB_EMULATOR_HOST = "localhost:8538";

const {PubSub} = require('@google-cloud/pubsub');


const pubsub = new PubSub({projectId: 'moot'});

async function init() {
  try {
    await pubsub.topic('test').createSubscription('test');
  } catch(e) {
    console.error(e);
  }

  const subscription = pubsub.subscription('test');
  subscription.on('message', (msg) => {
    msg.ack();
    console.log(JSON.parse(msg.data));
  });

  subscription.on('error', (e) => {
    console.error(e);
  });
}

init();