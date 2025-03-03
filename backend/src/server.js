require("dotenv").config();
const express = require("express");
const cors = require("cors");
const lessonRoutes = require("./routes/lessonRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/database"); // File kết nối MongoDB (xem hướng dẫn bên dưới)

const router = express.Router();
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Import và sử dụng các route cho Auth
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
// Trả về danh sách bài học Fake
app.use("/api", lessonRoutes);

app.get("/", (req, res) => {
  res.send("Listening App Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
