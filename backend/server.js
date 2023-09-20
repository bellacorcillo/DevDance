const express = require('express');
const axios = require('axios');
const qs = require('qs');

const app = express();

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const tokenResponse = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      data: qs.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/callback",
        client_id: "4d1fe896872e4fd18b145d6c7492af36",
        client_secret: "381f7034746643fc833ab903be1d65c3",
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    // Store the received tokens for this user session
    const accessToken = tokenResponse.data.access_token;
    const refreshToken = tokenResponse.data.refresh_token;

    // ...store these tokens and use them in subsequent requests...
    
    // Redirect the user back to the frontend app
    res.redirect("http://localhost:3000");
  } catch (error) {
    console.error("Error fetching tokens", error);
    res.status(500).send("Error fetching tokens");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});