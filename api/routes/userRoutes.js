'use strict';

// create App function
    module.exports = function(app) {
        // var productList = require('../controllers/productController');
        var userList = require('../controllers/userController');


// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/rest/v1/users")
        .get(userList.listAllUsers)
        .post(userList.createNewUser);

// put and delete request for /todos endpoints
        app
        .route("/rest/v1/user/:id")
        .put(userList.updateUser)
        .delete(userList.deleteUser);
    };
