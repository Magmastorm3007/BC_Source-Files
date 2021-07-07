var express = require("express");
var app = express();
var path=require("path");
app.use(express.static(path.join(__dirname,"public")))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname ,"public","/Homepage.html"));
});




app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});