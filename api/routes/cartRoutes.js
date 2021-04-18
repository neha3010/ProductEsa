'use strict';

// create App function
    module.exports = function(app) {
        // var productList = require('../controllers/productController');
        var cartList = require('../controllers/cartController');


// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/rest/v1/cart")
        .get(cartList.listAllCart)
        .post(cartList.createNewCart);

// put and delete request for /todos endpoints
        app
        .route("/rest/v1/cart/:id")
        .put(cartList.updateCart)
        .delete(cartList.deleteCart);
    };
