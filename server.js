import cors from 'cors';
import express from 'express';

import config from './config';
import router from './routes';

const app = express();

app.use(cors());

app.use(router);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} ...`);
});
