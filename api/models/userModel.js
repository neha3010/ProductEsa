'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;
    // var uuid = {"28740","01848","12984"};
// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
        uuid: {
            type:String,
            required:true
        },
        cart:[{
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

        }]
            
    });

// create and export model
module.exports = mongoose.model("user", TodoSchema);
