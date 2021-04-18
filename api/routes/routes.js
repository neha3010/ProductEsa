"use strict";

// create App function
module.exports = function (app) {
  var productList = require("../controllers/productController");

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

  var cartList = require("../controllers/cartController");

  // cartList Routes

  // get and post request for /cart endpoints
  app
    .route("/rest/v1/cart")
    .get(cartList.listAllCart)
    .post(cartList.createNewCart);

  // put and delete request for /cart endpoints
  app
    .route("/rest/v1/cart/:id")
    .put(cartList.updateCart)
    .delete(cartList.deleteCart);

  var userList = require("../controllers/userController");

  // userList Routes

  // get and post request for /users endpoints
  app
    .route("/rest/v1/users")
    .get(userList.listAllUsers)
    .post(userList.createNewUser);

  // put and delete request for /users endpoints
  app
    .route("/rest/v1/user/:id")
    .put(userList.updateUser)
    .delete(userList.deleteUser);
};
