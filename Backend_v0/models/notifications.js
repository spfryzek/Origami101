const mongoose = require("mongoose");

const notificationData = mongoose.Schema({
    notification_id : {
        type: Number,
        required: true
    },
    user_id : {
        type: Number,
        required: true
    },
    notification: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notifications', notificationData);