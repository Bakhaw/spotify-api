"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require('dotenv').config();
var _process$env = process.env,
  APP_URL_DEV = _process$env.APP_URL_DEV,
  APP_URL_PROD = _process$env.APP_URL_PROD,
  REDIRECT_URI_DEV = _process$env.REDIRECT_URI_DEV,
  REDIRECT_URI_PROD = _process$env.REDIRECT_URI_PROD,
  SPOTIFY_API_CLIENT_ID = _process$env.SPOTIFY_API_CLIENT_ID,
  SPOTIFY_API_CLIENT_SECRET = _process$env.SPOTIFY_API_CLIENT_SECRET,
  NODE_ENV = _process$env.NODE_ENV,
  PORT = _process$env.PORT;
var axiosConfig = function axiosConfig(accessToken) {
  return {
    headers: {
      Authorization: "Bearer ".concat(accessToken)
    }
  };
};
var spotifyConfig = {
  apiBaseUrl: 'https://api.spotify.com/v1',
  authEndpoint: 'https://accounts.spotify.com/authorize?',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  appBaseUrl: NODE_ENV === 'development' ? APP_URL_DEV : APP_URL_PROD,
  // front
  clientID: SPOTIFY_API_CLIENT_ID,
  clientSecret: SPOTIFY_API_CLIENT_SECRET,
  redirectUri: NODE_ENV === 'development' ? REDIRECT_URI_DEV : REDIRECT_URI_PROD,
  scopes: 'playlist-read-private user-modify-playback-state user-library-modify user-library-read user-read-recently-played user-read-currently-playing user-read-playback-state user-top-read user-follow-read streaming'
};
var _default = {
  AXIOS_CONFIG: axiosConfig,
  SPOTIFY_CONFIG: spotifyConfig,
  PORT: PORT || 3002
};
exports["default"] = _default;