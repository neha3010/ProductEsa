# ProductEsa

- Node.js has to be installed in the system.
- Then Create an account on Mongodb Atlas. And create a cluster and whitelist IP address.
- Once the cluster is created click on 'connect' and get uri.
- This uri has to be replaced in the place of uri in views/db.js file.
- Then run "npm init" in your terminal with files in api folder, views folder and server.js, followed by "npm install mongoose express body-parser".
- This will create package.json, package-lock.json and node_modules.
- The run node server.js in the terminal. You must get:
   Server running at http://localhost:3000
   Database connection established!
- After this open postman select post and give the url - "localhost:3000/rest/v1/products", then choose x-www-form-urlencoded" in the body and enter the product details and post.
