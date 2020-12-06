const mongoose = require("mongoose");

const courseData = mongoose.Schema({
    course_id : {
        type: Number,
        required: true
    },
    course_name : {
        type: String,
        required: true
    },
    course_level: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Courses', courseData);