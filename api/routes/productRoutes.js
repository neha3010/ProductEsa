'use strict';

// create App function
    module.exports = function(app) {
        // var productList = require('../controllers/productController');
        var productList = require('../controllers/productController');


// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/rest/v1/products")
        .get(productList.listAllProducts)
        .post(productList.createNewProduct);

// put and delete request for /todos endpoints
        app
        .route("/rest/v1/product/:id")
        .put(productList.updateProduct)
        .delete(productList.deleteProduct);
    };