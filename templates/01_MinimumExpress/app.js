var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Express start at http://localhost:3000");
});

app.get("/", function(req, res, next) {
  res.send('Hello Express World')
});