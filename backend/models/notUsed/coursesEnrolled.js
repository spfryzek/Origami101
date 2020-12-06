const mongoose = require("mongoose");

const courseEnrolledData = mongoose.Schema({
    enrolled_id : {
        type: Number,
        required: true
    },
    enrolled_id : {
        type: Number,
        required: true
    },
    course_id : {
        type: Number,
        required: true
    },
    date_enrolled: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CoursesEnrolled', courseEnrolledData);