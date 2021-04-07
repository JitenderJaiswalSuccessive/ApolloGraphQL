const schema = require('./module/index');
const Server = require('./server');
const config = require('./config/configuration');

const server = new Server(config);

(() => {
    server.bootstrap().setupApollo(schema);
})();

