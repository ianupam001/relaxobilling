const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    phone: String,
    message: String,
    stars: Number,
    reply: String
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
