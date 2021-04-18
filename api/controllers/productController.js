// import Todo Model
const  Product = require("../models/productModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllProducts = (req, res) => {
Product.find({}, (err, product) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(product);
});
};

// createNewTodo function - To create new todo
exports.createNewProduct = (req, res) => {
    console.log("request body",req.body);
    let  newTodo = new Product (req.body);
    newTodo.save((err, product) => {
        if (err) {
            res.status(500).send(err);
        }else {
            res.status(201).json(product);
        }
    });
};

// updateTodo function - To update todo status by id
exports.updateProduct = (req, res) => {
Product.findOneAndUpdate({ _id:req.params.id }, req.body, {new:true}, (err, product) => {
if (err) {
    res.status(500).send(err);
}
res.status(200).json(product);
});
};

// deleteTodo function - To delete todo by id
exports.deleteProduct = async ( req, res) => {
await  Product.deleteOne({ _id: req.params.id}, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Product successfully deleted"});
});
};


