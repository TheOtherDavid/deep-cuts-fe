import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
      const resp = await axios.get(`${process.env.REACT_APP_BE_API_URL}/token?code=${code}`);
      onLogin(resp.data.token);
    };

    if (code) {
      fetchToken();
    }
  }, [code, onLogin]);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}\u0026redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_URL}\u0026response_type=code\u0026scope=playlist-modify-private+playlist-modify-public\u0026state=abc123`;
  };

  return (
    <div className="login">
      {!token && (
        <Button variant="primary" className="green-button" onClick={handleLogin}>Login with Spotify</Button>
      )}
    </div>
  );
};
export default Login;