import User from "../models/userModel.js";
import config from "../config/index.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    console.log(req.body.password);
    const password = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password,
    });
    const save = await newUser.save();
    console.log(save);
    res.send("Saved");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
};

const loginUser = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  if (!email) return res.json({ massege: "User not found" });
  const correctPassword = await bcrypt.compare(
    req.body.password,
    email.password
  );
  if (!correctPassword) return res.json({ massege: "WORNG PASSWORD" });

  const token = await config.genarateToken({
    userID: email._id,
    email: email.email,
  });
  res.json({ massege: "LoggedIn ", Token: token });
};

export { registerUser, loginUser };
