// import Todo Model
const  Cart = require("../models/cartModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllCart = (req, res) => {
Cart.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// createNewTodo function - To create new todo
exports.createNewCart = (req, res) => {
let  newTodo = new Cart (req.body);
newTodo.save((err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(todo);
});
};

// updateTodo function - To update todo status by id
exports.updateCart = (req, res) => {
Cart.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// deleteTodo function - To delete todo by id
exports.deleteCart = async ( req, res) => {
await  Cart.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Cart successfully deleted"});
});
};
