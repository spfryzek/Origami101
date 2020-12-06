const mongoose = require("mongoose");

const userData = mongoose.Schema({
    user_id : {
        type: Number,
        required: true
    },
    first_name : {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: false
    },
    available: {
        type: Boolean,
        default: true
    },
    inappropriateActivity: {
        type: Number,
        default: 0
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', userData);