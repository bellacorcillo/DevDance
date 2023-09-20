const express = require('express');
const SpotifyWebApi = require('spotify-web-api-js');

const app = express();

const spotifyApi = new SpotifyWebApi({
  clientId: 'YOUR_SPOTIFY_CLIENT_ID',
  clientSecret: 'YOUR_SPOTIFY_CLIENT_SECRET',
  redirectUri: 'http://localhost:3000/callback',
});

app.get('/login', (req, res) => {
  const scopes = ['playlist-read-private', 'playlist-modify-public'];
  const authUrl = spotifyApi.createAuthorizeURL(scopes);

  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  const { accessToken, refreshToken } = await spotifyApi.exchangeCodeForToken(code);

  spotifyApi.setAccessToken(accessToken);
  spotifyApi.setRefreshToken(refreshToken);

  res.redirect('/');
});

app.get('/playlist', async (req, res) => {
  const playlists = await spotifyApi.getUserPlaylists();

  res.send(playlists);
});

app.post('/play', async (req, res) => {
  const playlistId = req.body.playlistId;

  await spotifyApi.startPlayback({
    uris: [playlistId]
  });

  res.send('Playing playlist');
});

app.post('/pause', async (req, res) => {
  await spotifyApi.pausePlayback();

  res.send('Pausing playback');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});