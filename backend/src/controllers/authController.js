const bcrypt = require("bcryptjs");
const User = require("../models/User");

// API Đăng ký người dùng bằng Email & Password
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Kiểm tra xem email đã tồn tại hay chưa
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    user = new User({
      name,
      email,
      password: hashedPassword,
      provider: "local",
    });
    await user.save();

    res.status(201).json({ message: "Đăng ký thành công", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
