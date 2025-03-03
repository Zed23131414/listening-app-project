const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Endpoint đăng ký người dùng
// POST /api/auth/register
router.post("/register", authController.register);

module.exports = router;
