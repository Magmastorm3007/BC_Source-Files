var express = require("express");
var app = express();
var path=require("path");
var session = require('express-session');
var bodyParser = require('body-parser');

const request = require('request')
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended : true}));



var mysql = require('mysql');
const { CONNREFUSED } = require("dns");

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
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname ,"public","/Homepage.html"));
  
  
});


app.use(express.json());
//here we go
app.post("/", (req, res)=>{

  
  
  
   const username=req.body.username;
const password=req.body.password;
  con.query("SELECT * from account where Email=? and Password=?",
  [username,password],
    (err,results,fields)=>{
      if(err)
console.log(err);
else if(results.length>0)
res.sendFile(path.join(__dirname ,"public","/Homepage.html"));
else 
res.sendFile(path.join(__dirname ,"public","/login.html"));

    }
  
  
  ); 



})

  
//hmm
app.listen(3000, () => console.log('Application is running'));
