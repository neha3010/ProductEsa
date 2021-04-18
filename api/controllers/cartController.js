// import Cart Model
const  Cart = require("../models/cartModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllCart function - 
exports.listAllCart = (req, res) => {
Cart.find({}, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
};

// createNewCart function - To create new cart
exports.createNewCart = (req, res) => {
let  newTodo = new Cart (req.body);
newTodo.save((err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(cart);
});
};

// updateCart function - To update cart status by id
exports.updateCart = (req, res) => {
Cart.findOneAndUpdate({ productId:req.params.id }, req.body, { new:true }, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
};

// deleteCart function - To delete cart by id
exports.deleteCart = async ( req, res) => {
await  Cart.deleteOne({ productId:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Cart successfully deleted"});
});
};
