//app.js
'use strict';

var express = require("express"),
  app = express();
 
app.set('views', 'views');
app.set('view engine', 'pug');

app.get("/", (req, res) => res.render(`home`));

app.listen(8080, () => {
  console.log(`Example app listening on port 8080!`);
});

module.exports.getApp=app;  
