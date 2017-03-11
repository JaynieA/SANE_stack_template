const PORT = process.env.port || 4000;
const EXPRESS = require( 'express' );
const APP = EXPRESS();
const BODYPARSER = require( 'body-parser' );
const PG = require( 'pg' );
const CONNECTION = require( './config/connection' );

//middleware
APP.use(EXPRESS.static( 'public' ));
APP.use(BODYPARSER.urlencoded( { extended: true } ));

//base url
APP.listen( PORT, function() {
  console.log( 'Server listening on', PORT );
}); // end listen

module.exports = APP;
