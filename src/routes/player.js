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

router.get('/currently-playing', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: 'me/player/currently-playing',
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log('Play song:', data);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put('/play', async (req, res) => {
  try {
    const { access_token, context_uri, position_ms, uris } = req.query;
    const options = {
      method: 'PUT',
      accessToken: access_token,
      data: {
        context_uri,
        offset: { uri: uris },
        position_ms: position_ms || 0,
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

router.put('/pause', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      method: 'PUT',
      accessToken: access_token,
      endpoint: 'me/player/pause',
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log('Pause song:', data);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
