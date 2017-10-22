var express = require('express');
var router = express.Router();
var pg = require('pg');
var app = require('express')();
var connectionString = process.env.DATABASE_URL;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/db', function (request, response) {
    var client = new pg.Client(connectionString);
    client.connect();
    const query = client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('pages/db', {results: result.rows} ); }
        });
    });

module.exports = router;
