import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [code, setCode] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setCode(searchParams.get('code'));
  }, []);

  useEffect(() => {
    const fetchToken = async () => {
      const resp = await axios.get(`http://localhost:8080/token?code=${code}`);
      onLogin(resp.data.token);
    };

    if (code) {
      fetchToken();
    }
  }, [code, onLogin]);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}\u0026redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F\u0026response_type=code\u0026scope=playlist-modify-private+playlist-modify-public\u0026state=abc123`;
  };

  return (
    <div>
      {!token && (
        <button onClick={handleLogin}>Login with Spotify</button>
      )}
    </div>
  );
};
export default Login;