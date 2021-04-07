const {fileLoader,mergeTypes}=require('merge-graphql-schemas');
const path=require('path');
const userQuery = require('./user');
const {traineeQuery, traineeMutation, traineeSubsciption} = require('./trainee/index');
const typesArray = fileLoader(path.join(__dirname,'./**/*.graphql'));
const typeDefs = mergeTypes(typesArray,{all:true});

module.exports = {
  resolvers: {
    Query: {
        ...userQuery,
        ...traineeQuery,
      },
    Mutation: {
        ...traineeMutation,
    },
    Subscription: {
        ...traineeSubsciption,
    },
  },
  typeDefs,
};
//  --exec babel-node (package.json)