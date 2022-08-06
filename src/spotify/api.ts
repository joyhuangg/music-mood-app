import axios from "axios";

export function registerUser() {
  return axios.get("http://localhost:8000/spotify/register");
}

export function getCurrentUser() {
  return axios.get("http://localhost:8000/spotify/current-user");
}

export function getCurrentUserPlayback() {
  return axios.get("http://localhost:8000/spotify/current-user-playback");
}
