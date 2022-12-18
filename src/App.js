import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import Login from './Login'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  const [token, setToken] = useState("");

  return (<>
    <h1>Deep Cuts</h1>
    <p>This app will remix your playlists, for when you want something different... but not TOO different. For every song on a playlist, Deep Cuts will get a different song from the same album. It will put these songs into a new playlist on your account!</p>
    <div className="playlist-container">
      {!token && <Login onLogin={setToken} />}
      <div className="get-playlist-form-container">
        {token && <GetPlaylistForm token={token} />}
      </div>
      <div className="generate-playlist-container">
        {token && <GeneratePlaylist token={token} />}
      </div>
    </div>
    </>
  );
};

export default App;

function GetPlaylistForm({ token }) {
  const [playlistId, setPlaylistId] = useState("");
  const [playlists, setPlaylists] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`${process.env.REACT_APP_BE_API_URL}/${playlistId}`,
    {
      headers: {
        'Authorization': "Bearer " + token
      }
    });
    const playlists = resp.data;

    setPlaylists(playlists);
  };

  return (
    <div className="main">
      <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="playlistId"
            placeholder="Playlist ID" 
            onChange={(e) => setPlaylistId(e.target.value)} />
            <Button variant="primary" type="submit" className="green-button">Get Playlist!</Button>
        </form>
      </div>
      <div className="song-list">
      {playlists && playlists.map(playlist =>
        <div className="song-item">
          <div>Track: </div>
          <div className="song-thumbnail">
            <img src={playlist.album.images[2].url}></img>
          </div>
          <div className="song-info">
            <div>Song: {playlist.name}</div>
            <div>Artist: {playlist.artists[0].name}</div>
            <a href={playlist.external_urls.spotify} target="_blank">Listen!</a>
            <div>Link: {playlist.external_urls.spotify}</div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

function ListPlaylistTracks() {
  const [playlist, setPlaylist] = useState("");

  return <>
  {(playlist === "" || playlist === undefined) &&
  <div>No list</div>}
  {(playlist !== "" && playlist !== undefined) &&
  <div>This is List {playlist[0]}</div> }
  </>
//<div>This is List ${playlist[0].artists[0].name}</div> }
}

function GeneratePlaylist({ token }) {
  const [playlistId, setPlaylistId] = useState("");
  const [playlists, setPlaylists] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post(`${process.env.REACT_APP_BE_API_URL}/${playlistId}`, null,
    {
      headers: {
        'Authorization': "Bearer " + token
      }
    })
    const playlists = resp.data

    setPlaylists(playlists);
  };
  return <>
    <div className="main">
      <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="playlistId"
            placeholder="Playlist ID" 
            onChange={(e) => setPlaylistId(e.target.value)} />
            <Button variant="primary" type="submit" className="green-button">Generate Deep Cut Playlist!</Button>
        </form>
      </div>
      <div className="song-list">
      {playlists &&
        <div>Your new playlist: </div>}
      {playlists && playlists.map(playlist =>
        <div className="song-item">
          <div>Track: </div>
          <div className="song-thumbnail">
            <img src={playlist.album.images[2].url}></img>
          </div>
          <div className="song-info">
            <div>Song: {playlist.name}</div>
            <div>Artist: {playlist.artists[0].name}</div>
            <a href={playlist.external_urls.spotify} target="_blank">Listen!</a>
            <div>Link: {playlist.external_urls.spotify}</div>
          </div>
        </div>
      )}
      </div>
  </div>
  </>
}

function GetToken({ setToken }) {
  //const [tokenState, setToken] = useState([]);
  useEffect(async() => {
    const resp = await axios.get(`${process.env.REACT_APP_BE_API_URL}/token?code=${code}`)
    const token = resp.data.token
    //Are we setting the state properly here?
    setToken(token);
  }, []);

  return null
}