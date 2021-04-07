const constant = require('../../lib/constant');
const pubsub = require('../pubsub');

module.exports = {
    traineeAdded: {
      subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_ADDED]),
    },
    traineeUpdated: {
      subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
    },
    traineeDeleted: {
      subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
    },
}