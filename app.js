'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('Index', {
  });
});

app.listen(8080);
module.exports.getApp = app;
