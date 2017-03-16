const EXPRESS = require( 'express' );
const ROUTER = EXPRESS.Router();
const PG = require( 'pg' );
const CONNECTION = require( '../config/connection' );

//GETS contents of `main` table
ROUTER.get('/', function(req, res) {
  let results = [];
  PG.connect(CONNECTION, function(err, client, done) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
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

//POSTS greeting to `main` table
ROUTER.post( '/', function(req,res) {
  let newGreeting = req.body.text;
  console.log(newGreeting);
  PG.connect( CONNECTION, function(err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      let queryString = 'INSERT INTO main (text) VALUES ($1)';
      let query = client.query(queryString, [newGreeting],
      function(err, results) {
        if(err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        } // end else
      }); // end query
    } // end else
  }); // end connect
}); // end post

module.exports = ROUTER;
