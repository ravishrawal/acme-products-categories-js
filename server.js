var express = require('express');
var db=require('./db')
var path =require('path');
var swig = require('swig');
swig.setDefaults({cache:false})
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/vendor', express.static(path.join(__dirname,'node_modules')));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('method-override')('_method'));   //looks in POST for things like ?_method=DELETE

app.use('/',function(req,res,next) {
  console.log(req.url);
  next();
});

app.use('/categories',require('./routes/categories'));

app.get('/',function(req,res) {
  res.render('index',{ categories : db.getCategoryNames()});
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening on port 3000')
})
