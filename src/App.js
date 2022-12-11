import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      {!token && <Login onLogin={setToken} />}
      {token && <GetPlaylistForm token={token} />}
      {token && <GeneratePlaylist token={token} />}
    </div>
  );
};

export default App;

function GetPlaylistForm({ token }) {
  const [playlistId, setPlaylistId] = useState("");
  const [playlists, setPlaylists] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`http://localhost:8080/${playlistId}`,
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
      <form onSubmit={handleSubmit}>
          <input type="text" 
          name="playlistId"
          placeholder="Playlist ID" 
          onChange={(e) => setPlaylistId(e.target.value)} />
          <button type="submit">Get Playlist!</button>
      </form>
      {(playlistId === "" || playlistId === "undefined") &&
      <div>
        Enter a Playlist ID.
      </div>
      }
      <div>
      {(playlists === "" || playlists === undefined) &&
      <div>No list</div>}
      {playlists && playlists.map(playlist =>
        <div>
              <div>Track: </div>
              <img src={playlist.album.images[2].url}></img>
              <div>Song: {playlist.name}</div>
              <div>Artist: {playlist.artists[0].name}</div>
              <a href={playlist.external_urls.spotify} target="_blank">Listen!</a>
              <div>Link: {playlist.external_urls.spotify}</div>
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
    const resp = await axios.post(`http://localhost:8080/${playlistId}`, null,
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
      <form onSubmit={handleSubmit}>
          <input type="text" 
          name="playlistId"
          placeholder="Playlist ID" 
          onChange={(e) => setPlaylistId(e.target.value)} />
          <button type="submit">Generate Deep Cut Playlist!</button>
      </form>
      {(playlistId === "" || playlistId === "undefined") &&
      <div>
        Enter a Playlist ID.
      </div>
      }
      <div>
      {(playlists === "" || playlists === undefined) &&
      <div>No list</div>}
      {playlists &&
        <div>Your new playlist: </div>}
      {playlists && playlists.map(playlist =>
          <div>
                <div>Track: </div>
                <img src={playlist.album.images[2].url}></img>
                <div>Song: {playlist.name}</div>
                <div>Artist: {playlist.artists[0].name}</div>
                <a href={playlist.external_urls.spotify} target="_blank">Listen!</a>
                <div>Link: {playlist.external_urls.spotify}</div>
          </div>
      )}
      </div>
  </div>
  </>
}

function GetToken({ setToken }) {
  //const [tokenState, setToken] = useState([]);
  useEffect(async() => {
    const resp = await axios.get(`http://localhost:8080/token?code=${code}`)
    const token = resp.data.token
    //Are we setting the state properly here?
    setToken(token);
  }, []);

  return null
}