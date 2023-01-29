import axios from 'axios';
import { Router } from 'express';
import querystring from 'querystring';
import request from 'request';

import { generateRandomString } from '../utils/generateRandomString';

import config from '../config';

const router = Router();

const {
  appBaseUrl,
  authEndpoint,
  clientID,
  clientSecret,
  redirectUri,
  scopes,
  tokenEndpoint,
} = config.SPOTIFY_CONFIG;

const stateKey = 'spotify_auth_state';
const state = generateRandomString(16);

// LOGIN
router.get('/auth/login', async (req, res) => {
  res.cookie(stateKey, state);

  const url =
    authEndpoint +
    querystring.stringify({
      response_type: 'code',
      client_id: clientID,
      scope: scopes,
      redirect_uri: redirectUri,
      show_dialog: true,
      state,
    });

  res.redirect(url);
});

// LOGIN CALLBACK
router.get('/auth/callback', async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  // console.log('AUTH CALLBACK ::::::::::::::::::::::::: ', {
  //   code,
  //   state,
  //   storedState,
  // });

  if (state === null || state !== storedState) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie(stateKey);

    const authOptions = {
      url: tokenEndpoint,
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(clientID + ':' + clientSecret).toString('base64'),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { Authorization: 'Bearer ' + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {});

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          `${appBaseUrl}/#` +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          '/#' +
            querystring.stringify({
              error: 'invalid_token',
            })
        );
      }
    });
  }
});

router.get('/auth/refresh_token', function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: tokenEndpoint,
    headers: {
      Authorization:
        'Basic ' + new Buffer(clientID + ':' + clientSecret).toString('base64'),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;

      console.log('NEW AUTH TOKEN:::::', access_token);

      res.send({
        access_token: access_token,
      });
    }
  });
});

export default router;
