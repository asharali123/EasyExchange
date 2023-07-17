const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    accountTitle: {
        type: String,
        trim: true,
        required: [true, "Account title is required"],
    },
    accountNumber: {
        type: String,
        required: [true, "Account number is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Amount cannot be negative"],
    },
    currency: {
        type: String,
        trim: true,
        required: [true, "Currency is required"],
    },
    paymentMethod: {
        type: String,
        enum: ['easypaise', 'jazzcash', 'naypay'],
        required: [true, 'Payment method is required']
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const buyModel = mongoose.model("crypto-order", buySchema);

module.exports = buyModel;
