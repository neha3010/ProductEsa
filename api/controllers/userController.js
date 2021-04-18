// import Todo Model
const  User = require("../models/userModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllUsers = (req, res) => {
User.find({}, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};

// createNewTodo function - To create new todo
exports.createNewUser = (req, res) => {
let  newTodo = new User (req.body);
newTodo.save((err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(user);
});
};

// updateTodo function - To update todo status by id
exports.updateUser = (req, res) => {
Cart.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};

// deleteTodo function - To delete todo by id
exports.deleteUser = async ( req, res) => {
await  User.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"User successfully deleted"});
});
};
