import jwt from "jsonwebtoken";
import config from "./index.js";

const genarateToken = async (payload) => {
  return await jwt.sign(payload, config.secretKey, { expiresIn: "1h" });
};
const verify = async (token) => {
  try {
    return await jwt.verify(token, config.secretKey);
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
};

export { genarateToken, verify };
