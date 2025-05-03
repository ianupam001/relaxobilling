const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public route
router.get('/:phone', billController.getBillByPhone);

// Admin-only routes
router.use(authMiddleware('admin'));

router.post('/', billController.createBill);
router.get('/', billController.listBills);

module.exports = router;
