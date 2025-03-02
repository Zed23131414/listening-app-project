const express = require("express");
const router = express.Router();

// Fake data để test nếu chưa có database
const lessons = [
  { _id: "1", title: "Lesson 1" },
  { _id: "2", title: "Lesson 2" },
];

// Route trả về danh sách bài học
router.get("/lessons", (req, res) => {
  res.json(lessons);
});

module.exports = router;
