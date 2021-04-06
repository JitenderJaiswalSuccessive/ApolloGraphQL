const userQuery = require('./user');
const {traineeQuery, traineeMutation} = require('./trainee/index');

module.exports={
    Query: {
        ...userQuery,
        ...traineeQuery,
      },
    Mutation: {
        ...traineeMutation,
    }
};
//  --exec babel-node (package.json)