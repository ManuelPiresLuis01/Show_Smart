import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Html from "../html/html.js";
import transporter from "../config/email.js";

dotenv.config();
class AuthController {
  createUser = async (req, res) => {
    const { name, email, password, idiom, gender, dateOfBirth, terms } =
      req.body;

    if (
      !name ||
      !email ||
      !password ||
      !idiom ||
      !gender ||
      !dateOfBirth ||
      terms === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        idiom,
        gender,
        dateOfBirth,
        terms,
      });

      res
        .status(201)
        .json({ message: "Was sent a message to activate ur account", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      if (user.accountStatus !== "active") {
        return res
          .status(403)
          .json({ message: `Account is ${user.accountStatus}` });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRES_IN  }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  sendActivationLink = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const activationToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: TOKEN_EXPIRES_IN  }
      );

      const backendUrl = `${req.protocol}://${req.get("host")}`;
      const activationLink = `${backendUrl}/api/v1/auth/activateAccount/${activationToken}`;
      try {
        await transporter.sendMail({
          from: `"Show Smart" <${process.env.EMAIL_USER}>`,
          to: user.email,
          subject: "Ative sua conta",
          html: Html(activationLink),
        });
        res.status(200).json({
          message: "Activation link generated and email sent",
        });
      } catch (error) {
        res.status(500).json({ message: "Error sending email", error });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  activateAccount = async (req, res) => {
    const { token } = req.params;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findByIdAndUpdate(
        decoded.id,
        { accountStatus: "active" },
        { new: true }
      );

      if (!user) {
        return res.status(404).send("user not found");
      }

      return res.redirect(`${process.env.FRONTEND_URL}/login`);
    } catch (error) {
      return res.status(400).send("invalid or expired token");
    }
  };

  getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default AuthController;
