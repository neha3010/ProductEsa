'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const ProductSchema = new Schema({
        productId: {
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        productName: {
            type:String,
            required:true
        },
        productModel: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        availableQuantity: {
            type:Number,
            required:true
        }
    });

// create and export model
module.exports = mongoose.model("productModel", ProductSchema);

