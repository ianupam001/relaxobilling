const Feedback = require('../models/feedback.model');

exports.submitFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listFeedback = async (req, res) => {
    try {
        const list = await Feedback.find().sort({ createdAt: -1 });
        res.json(list);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.replyToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { reply } = req.body;

        const updated = await Feedback.findByIdAndUpdate(id, { reply }, { new: true });

        // Dummy SMS function
        console.log(`Sending SMS to ${updated.phone}: ${reply}`);

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
