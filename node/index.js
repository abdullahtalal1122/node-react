import express from "express";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import config from "./config/index.js";
import cors from "cors";

const port = 8000;
const app = express();
config.db();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
