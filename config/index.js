require('dotenv').config();

const {
  APP_URL_LOCAL,
  APP_URL_PROD,
  SPOTIFY_API_BASE_URL,
  SPOTIFY_API_AUTH_ENDPOINT,
  SPOTIFY_CLIENT_ID,
  NODE_ENV,
  PORT,
} = process.env;

const axiosConfig = (accessToken) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const spotifyConfig = {
  apiBaseUrl: SPOTIFY_API_BASE_URL,
  authEndpoint: SPOTIFY_API_AUTH_ENDPOINT,
  clientID: SPOTIFY_CLIENT_ID,
  redirectUri: NODE_ENV === 'development' ? APP_URL_LOCAL : APP_URL_PROD,
  scopes: ['user-read-currently-playing', 'user-read-playback-state'],
};

export default {
  AXIOS_CONFIG: axiosConfig,
  SPOTIFY_CONFIG: spotifyConfig,
  PORT: PORT || 3002,
};
