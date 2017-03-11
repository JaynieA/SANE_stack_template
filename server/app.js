const PORT = process.env.port || 4000;
const EXPRESS = require( 'express' );
const APP = express();
const BODYPARSER = require( 'body-parser' );
const PG = require( 'pg' );

const CONNECTION = require( './config/connection' );

module.exports = APP;
