import express from "express";
const userRoute = express.Router();
import { registerUser, loginUser } from "../middlewares/usersMiddleware.js";
import { home } from "../controller/applicationController.js";
import config from "../config/index.js";

userRoute.route("/register").post(registerUser);
userRoute.route("/login").post(loginUser);
userRoute.route("/").get(config.authenticate, home);

export default userRoute;
