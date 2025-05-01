const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill.controller');

router.post('/', billController.createBill);
router.get('/:phone', billController.getBillByPhone);
router.get('/', billController.listBills);

module.exports = router;
