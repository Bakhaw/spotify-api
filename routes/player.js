import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/recent', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: 'me/player/recently-played',
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log('Recently played:', data);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put('/play', async (req, res) => {
  try {
    const { access_token, context_uri, uris } = req.query;
    const options = {
      method: 'PUT',
      accessToken: access_token,
      data: {
        context_uri,
        offset: { uri: uris },
        // uris: [uris],
      },
      endpoint: 'me/player/play',
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log('Play song:', data);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
