const dotenv=require('dotenv');

const envparsed = dotenv.config().parsed;
const config={
    port:envparsed.PORT,
};
Object.freeze(config);

module.exports = config;
