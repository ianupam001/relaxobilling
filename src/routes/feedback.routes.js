const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

router.post('/', feedbackController.submitFeedback);
router.get('/', feedbackController.listFeedback);
router.get('/:id', feedbackController.getFeedbackById);
router.put('/:id/reply', feedbackController.replyToFeedback);

module.exports = router;
