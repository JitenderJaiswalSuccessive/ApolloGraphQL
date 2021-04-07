const users = require('../../service/user');
const pubsub = require('../pubsub');
const constant = require('../../lib/constant');
const userInstance = require('../../service/user');

module.exports = {
    createTrainee:  (parent, args) => {
        const { user } = args;
        console.log(args);
        const addedUser = userInstance.createUser(user);
        pubsub.publish(constant.subscriptions.TRAINEE_ADDED, {traineeAdded: addedUser});
        return addedUser;
    },
    updateTrainee:  (parent, args) => {
        const { id, role } = args;
        const updateUser = userInstance.updateUser(id, role);
        pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, {traineeUpdated: updateUser });
        return updateUser;
    },
    deleteTrainee:  (parent, args) => {
        const { id } = args;
        const deletedId = userInstance.deleteUser(id);
        pubsub.publish(constant.subscriptions.TRAINEE_DELETED, {traineeDeleted: deletedId });
        return deletedId;
    },
}