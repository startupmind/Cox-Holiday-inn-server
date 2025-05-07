const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const JWT_SECRET = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, role, status, profileImage } =
      req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role: role || "admin",
      status: status || "inactive",
      profileImage: profileImage || null,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 6 * 60 * 1000);
    user.otp = { code: otpCode, expiresAt: otpExpiresAt };
    await user.save();

    await transporter.sendMail({
      from: '"Cox Holiday inn" <noreply@CoxHolidayInn.com>',
      to: user.email,
      subject: "Your OTP for Login",
      text: `Your OTP is ${otpCode}, Please use this code to Unlock your Admin dashboard.
This OTP is valid for 6 minutes. It can only be used once.
If you did not request this, please contact Us immediately.

Startup MInd`,
    });

    res.status(200).json({ message: "OTP sent to your email. Please verify." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const currentTime = new Date();
    if (currentTime > user.otp.expiresAt) {
      return res.status(400).json({ message: "OTP has expired" });
    }
    if (user.otp.code !== otpCode) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "16h" }
    );

    res.status(200).json({
      message: "OTP verified successfully",
      token: token,
      userId: user._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during OTP verification", error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error changing password", error: error.message });
  }
};

// exports.requestPasswordReset = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     await transporter.sendMail({
//       from: '"Your App Name" <web.startupmind@gmail.com>',
//       to: user.email,
//       subject: "Password Reset Request",
//       text: `Click the following link to reset your password: https://yourapp.com/reset-password/${resetToken}`,
//     });
//     res.status(200).json({ message: "Password reset email sent" });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error requesting password reset",
//       error: error.message,
//     });
//   }
// };

// exports.resetPassword = async (req, res) => {
//   try {
//     const { token, newPassword } = req.body;
//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     user.password = await bcrypt.hash(newPassword, 10);
//     await user.save();
//     res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error resetting password", error: error.message });
//   }
// };

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -otp");
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password -otp");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};
