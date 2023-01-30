import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/me', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `me`,
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log(
    //   'OAUIAIOSDUAZAOIUHBAZFDBAZFABZOFAZFZAIUFZAUIFBZAIFBZAUIBFZAUI /ME ::::::::::::::::::::::::::::',
    //   'OAUIAIOSDUAZAOIUHBAZFDBAZFABZOFAZFZAIUFZAUIFBZAIFBZAUIBFZAUI /ME ::::::::::::::::::::::::::::',
    //   data
    // );

    res.send(data);
  } catch (error) {
    console.log('error', error);
    res.send(error);
  }
});

export default router;
