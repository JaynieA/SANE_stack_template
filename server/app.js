const PORT = process.env.port || 4000;
const EXPRESS = require( 'express' );
const APP = EXPRESS();
const BODYPARSER = require( 'body-parser' );
const PG = require( 'pg' );
const CONNECTION = require( './config/connection' );

//middleware
APP.use(EXPRESS.static( 'public' ));
APP.use(BODYPARSER.urlencoded( { extended: true } ));
APP.use(BODYPARSER.json());

//Spin up server
APP.listen( PORT, function() {
  console.log( 'Server listening on', PORT );
}); // end listen

//Base URL
let indexRoute = require('./routers/indexRoute');
APP.use('/', indexRoute);

//routers
let main = require( './routers/main' );
APP.use( '/main', main );

module.exports = APP;
