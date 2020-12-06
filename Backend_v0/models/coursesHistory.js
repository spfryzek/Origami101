const mongoose = require("mongoose");

const courseHistoryData = mongoose.Schema({
    history_id : {
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
    date_enrolled: {
        type: Date,
        default: Date.now
    },
    date_completed: {
        type: Date,
        default: Date.now //todo change to empty
        //required: true
    }
});

module.exports = mongoose.model('CoursesHistory', courseHistoryData);