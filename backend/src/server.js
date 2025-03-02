require("dotenv").config();
const express = require("express");
const cors = require("cors");
const lessonRoutes = require("./routes/lessonRoutes");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
// Trả về danh sách bài học Fake
app.use("/api", lessonRoutes);

app.get("/", (req, res) => {
  res.send("Listening App Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
