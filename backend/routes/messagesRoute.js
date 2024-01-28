const { sendMessage } = require("../controllers/messagesController");
const { protect } = require("../middlewares/authMiddleware");
const express = require("express");
const { allMessages } = require("../controllers/messagesController");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
