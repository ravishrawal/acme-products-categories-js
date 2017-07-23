var db = require('../db');
var app = require('express').Router();
module.exports = app;

app.get('/:name/products',function(req,res,next) {
  console.log(db.getProductsByCategory(req.params.name));
  res.render('products', {nav: 'Foo Category', categories : db.getCategoryNames(), products: db.getProductsByCategory(req.params.name)});
});
