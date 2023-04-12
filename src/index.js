import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

import config from "./config/index.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(router);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} ...`);
});

export const handler = serverless(app);
