import express from "express";
import AuthController from "../controllers/authController.js";

const auth = new AuthController();
const authRouter = express.Router();

authRouter.post("/register", auth.createUser);
authRouter.get("/getusers", auth.getUsers);
authRouter.post("/login", auth.loginUser);
authRouter.get("/activateAccount/:token", auth.activateAccount);
authRouter.post("/sendActivationLink", auth.sendActivationLink);

export default authRouter;
