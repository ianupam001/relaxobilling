const Bill = require('../models/bill.model');

exports.createBill = async (req, res) => {
    try {
        const bill = new Bill(req.body);
        await bill.save();
        res.status(201).json(bill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBillByPhone = async (req, res) => {
    try {
        const phone = req.params.phone;
        const bills = await Bill.find({ "customerData.phone": phone });
        res.json(bills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listBills = async (req, res) => {
    try {
        const bills = await Bill.find().sort({ createdAt: -1 });
        res.json(bills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
