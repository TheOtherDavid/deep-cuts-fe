import './App.css';
import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  const [playlist, setPlaylist] = useState("");
  //return code ? <GenerateForm code={code} /> : <Login />
  if (code == null) {
   return <Login />
  } else {
    return <>
     <GetPlaylistForm code={code} />
     <GeneratePlaylist code={code} />
    </>
  }
}

export default App;

function GetPlaylistForm() {
    const [playlistId, setPlaylistId] = useState("");
    const [playlists, setPlaylists] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const resp = await axios.get(`http://localhost:8080/${playlistId}?code=${code}`)
        const playlists = resp.data

        setPlaylists(playlists);
    };
    return <>
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
    </>;
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

function GeneratePlaylist() {
  const [playlistId, setPlaylistId] = useState("");
  const [playlists, setPlaylists] = useState("");
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      
      const resp = await axios.post(`http://localhost:8080/${playlistId}?code=${code}`)
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
