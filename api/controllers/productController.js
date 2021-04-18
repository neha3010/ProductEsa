// import Product Model
const  Product = require("../models/productModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllProducts function - To list all products
exports.listAllProducts = (req, res) => {
Product.find({}, (err, product) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(product);
});
};

// createNewProduct function - To create new product
exports.createNewProduct = (req, res) => {
    console.log("request body",req.body);
    let  newProduct = new Product (req.body);
    newProduct.save((err, product) => {
        if (err) {
            res.status(500).send(err);
        }else {
            res.status(201).json(product);
        }
    });
};

// updateProduct function - To update product status by id
exports.updateProduct = (req, res) => {
Product.findOneAndUpdate({ productId:req.params.id }, req.body, {new:true}, (err, product) => {
if (err) {
    res.status(500).send(err);
}
res.status(200).json(product);
});
};

// deleteProduct function - To delete product by id
exports.deleteProduct = async ( req, res) => {
await  Product.deleteOne({ productId: req.params.id}, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Product successfully deleted"});
});
};


