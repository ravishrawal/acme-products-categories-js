var data={};

var Product = function(name,id) {
  this.name = name;
  this.id=id;
}

var createCategory = function(name) {
  data[name] = [];
}

var createProduct = function(name,category) {
  data[category].push(new Product(name,data[category].length));
}

var deleteProduct = function(id, category) {
  var tempArr=data[category];
  tempArr.forEach(function(arg) {
    if(arg.id === id){tempArr.splice(tempArr.indexOf(arg),1)}
  })
}

var deleteCategory = function(name) {
  delete data[name];
}

var getCategoryNames = function() {
  return Object.keys(data);
}

var getProductsByCategory = function(category) {
  console.log(data[category])
  return data[category];
}

createCategory('Foo Category');
createProduct('foo 1','Foo Category');
createProduct('foo 2','Foo Category');
createCategory('Bar Category');
createProduct('bar 1','Bar Category');
createProduct('bar 2','Bar Category');

module.exports={createCategory : createCategory, createProduct : createProduct, deleteProduct : deleteProduct,
deleteCategory : deleteCategory, getCategoryNames : getCategoryNames, getProductsByCategory : getProductsByCategory}
