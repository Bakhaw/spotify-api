import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

import config from './config';
import router from './routes';

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(router);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} ...`);
});
