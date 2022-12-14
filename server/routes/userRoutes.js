const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

const { protect } = require("../middleware/authModdleware");

router.post("/", registerUser);
router.post("/login", loginUser);
