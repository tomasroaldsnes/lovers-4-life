const routes = require('next-routes')();

routes
    .add('/lovers/all', '/campaign/all')
    .add('/lovers/:address','/lovers/forever');

module.exports = routes;
