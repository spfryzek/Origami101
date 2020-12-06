
const mongoose = require("mongoose");

const submissionData = mongoose.Schema({
    submission_id : {
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
    submission: {
        type: String,
        required: true
    },
    pending: {
        type: Boolean,
        default: true
    },
    grade: {
        type: String,
        default: ""
    },
    Justification: {
        type: String,
        default: ""
    },
    timestamp: {
        type: Date,
        default: Date.now //todo change to empty
    }
});

module.exports = mongoose.model('Submission', submissionData);