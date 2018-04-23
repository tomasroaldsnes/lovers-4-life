const routes = require('next-routes')();

routes
    .add('/lovers/all', '/lovers/all')
    .add('/lovers/:address','/lovers/forever');

module.exports = routes;
