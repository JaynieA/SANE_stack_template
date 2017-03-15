const EXPRESS = require( 'express' );
const ROUTER = EXPRESS.Router();
const PG = require( 'pg' );
const CONNECTION = require( '../config/connection' );

//gets contents of `main` table
ROUTER.get('/', function(req, res) {
  let results = [];
  PG.connect(CONNECTION, function(err, client, done) {
    if (err) {
      //If there was an error, log it
      console.log(err);
    } else {
      let query = client.query("SELECT id, text FROM main");
      query.on('row', function(row) {
        results.push(row);
      }); // end on
      query.on('end', function() {
        done();
        res.send({ results: results });
      }); // end end
    } // end else
  }); // end connect
}); // end get

module.exports = ROUTER;
