var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aloo",
database:"mydb"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM account ", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  
});
