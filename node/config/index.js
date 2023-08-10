import { authenticate } from "./authConfig.js";
import db from "./dbConfig.js";
import { genarateToken, verify } from "./jwtfunctions.js";

const secretKey = "this is my secret";
const URL = "mongodb://127.0.0.1:27017/dbproject";

const config = { authenticate, db, genarateToken, verify, secretKey, URL };
export default config;
