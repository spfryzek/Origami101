const mongoose = require("mongoose");

const commentData = mongoose.Schema({
    comment_id : {
        type: Number,
        required: true
    },
    user_id : {
        type: Number,
        required: true
    },
    course_id : {
        type: Number,
        required: true
    },
    page : {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    pending: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Comment', commentData);