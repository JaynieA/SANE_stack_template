/**
 * Serves the index.html file
 * @module routers/indexRoute
 */
const EXPRESS = require('express');
const PATH = require('path');
const ROUTER = EXPRESS.Router();

ROUTER.get('/', function(req, res) {
  var homePath = path.join(__dirname, '../../public/views/index.html');
  res.sendFile(homePath);
});

module.exports = ROUTER;
