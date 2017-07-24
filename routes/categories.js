var db = require('../db');
var app = require('express').Router();
module.exports = app;

app.get('/:name/products',function(req,res,next) {
  // console.log(db.getProductsByCategory(req.params.name));
  res.render('products', {nav: req.params.name, categories : db.getCategoryNames(), products: db.getProductsByCategory(req.params.name)});
});

app.post('/:name/products', function(req, res) {
  // console.log(req.body.productName, 'req.params.name:'+req.params.name)
  db.createProduct(req.body.productName, req.params.name);
  res.redirect('/');
})

app.post('/', function(req, res) {
  // console.log('req.params.name:'+req.params.name)
  db.createCategory(req.body.newCat);
  res.redirect('/');
})

app.delete('/:name', function(req, res) {
  db.deleteCategory(req.params.name)
  res.redirect('/');
})

app.delete('/:name/products/:id', function(req, res) {
  console.log('id:'+req.params.name);
  db.deleteProduct(+req.params.id, req.params.name);
  res.redirect('/');
})
