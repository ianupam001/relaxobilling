const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register); // Register (admin/user)
router.post('/login', authController.login);       // Login and get token

module.exports = router;
