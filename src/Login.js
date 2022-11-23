import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL = 
`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}\u0026redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F\u0026response_type=code\u0026scope=playlist-modify-private+playlist-modify-public\u0026state=abc123`

export default function Login() {
    return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
    >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login With Spotify
        </a>
    </Container>
    )
}