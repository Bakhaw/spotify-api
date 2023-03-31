require('dotenv').config();

const {
  APP_URL_DEV,
  APP_URL_PROD,
  REDIRECT_URI_DEV,
  REDIRECT_URI_PROD,
  SPOTIFY_API_CLIENT_ID,
  SPOTIFY_API_CLIENT_SECRET,
  NODE_ENV,
  PORT,
} = process.env;

const axiosConfig = (accessToken) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const spotifyConfig = {
  apiBaseUrl: 'https://api.spotify.com/v1',
  authEndpoint: 'https://accounts.spotify.com/authorize?',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  appBaseUrl: NODE_ENV === 'development' ? APP_URL_DEV : APP_URL_PROD, // front
  clientID: SPOTIFY_API_CLIENT_ID,
  clientSecret: SPOTIFY_API_CLIENT_SECRET,
  redirectUri:
    NODE_ENV === 'development' ? REDIRECT_URI_DEV : REDIRECT_URI_PROD,
  scopes:
    'user-library-modify user-library-read user-read-recently-played user-read-currently-playing user-read-playback-state user-top-read user-follow-read streaming',
};

export default {
  AXIOS_CONFIG: axiosConfig,
  SPOTIFY_CONFIG: spotifyConfig,
  PORT: PORT || 3002,
};
