const mongoose = require("mongoose");

const schemaPosts = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});


const userData = mongoose.Schema({
    /*user_id : {
        type: Int,
        required: true
    },*/
    first_name : {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', schemaPosts);

//module.exports = mongoose.model('Users', userData);