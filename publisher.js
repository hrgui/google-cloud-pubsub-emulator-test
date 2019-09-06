process.env.PUBSUB_EMULATOR_HOST = "localhost:8538";

const {PubSub} = require('@google-cloud/pubsub');


const pubsub = new PubSub({projectId: 'moot'});

async function init() {
  try {
    await pubsub.createTopic('test');
  } catch(e) {

  }

  await pubsub.topic('test').publishJSON({
    date: Date.now()
  });
}

init();
