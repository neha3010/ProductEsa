'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const CartSchema = new Schema({
        productId: {
            type:String,
            required:true
        },
        productName: {
            type:String,
            required:true
        },
        quantity: {
            type:Number,
            required:true
        },
        amount: {
            type:Number,
            required:true
        }
        
    });

// create and export model
module.exports = mongoose.model("cart", CartSchema);
