var express = require('express'),
    app = express(),
    connection = require('./database');

app.get('/mydb', function (req, res) {
    connection.query('SELECT * FROM account', function(err, rows, fields)
    {
        res.render('account', {
          items: rows
        });
    });
});

var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});