// import User Model
const  User = require("../models/userModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllUsers function - To list all users
exports.listAllUsers = (req, res) => {
User.find({}, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};

// createNewUser function - To create new user
exports.createNewUser = (req, res) => {
let  newTodo = new User (req.body);
newTodo.save((err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(user);
});
};

// updateUser function - To update user status by id
exports.updateUser = (req, res) => {
Cart.findOneAndUpdate({ uuid:req.params.id }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};

// deleteUser function - To delete user by id
exports.deleteUser = async ( req, res) => {
await  User.deleteOne({ uuid:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"User successfully deleted"});
});
};
