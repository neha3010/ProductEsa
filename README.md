# ProductEsa

## Prerequisites
- Install nodejs in the system ([ref](https://nodejs.org/en/download/)).
- Create an account in Mongodb Atlas.
- Once the cluster is created click on 'connect' and get URI.
- Add whitelist IP address
- Replace the uri in views/db.js file
- Install Postman ([ref](https://www.postman.com/)).

## Start Server
- run `node server.js` in the terminal. This starts server at http://localhost:3000
 - Expected console output - `Database connection established!`
- Open the localhost in Postman

## API methods/calls

### GET
- rest/v1/product - GET all products
- rest/v1/cart - GET all products in cart
- rest/v1/users - GET all users details
### POST
- /rest/v1/product - Create a new product
  - required fields *productId, **category, **productName, **productModel, **price, **availableQuantity*.
- /rest/v1/cart - Add a product to the cart
  - required fields *productId, **productName, **quantity, **amount*.
- /rest/v1/users - Add a user with cart
  - required fields *uuid, **cart* (optional).
 
### UPDATE
- /rest/v1/product/${productId} - update the product with productId
- /rest/v1/cart/${productId} - update the product in cart with productId
- /rest/v1/users/${uuid} - update the user with uuid

### DELETE
- /rest/v1/product/${productId} - delete the product with productId.
- /rest/v1/cart/${productId} - delete the product with productId in cart.
- /rest/v1/users/${uuid} - delete the product with uuid.
