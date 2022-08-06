import React,{ useState, useEffect } from 'react';
import { getCurrentUserPlayback, registerUser } from '../spotify/api.ts';
import SpotifyTrackList from '../spotify/tracks/list/SpotifyTrackList';
import SpotifyTrackSummary from '../spotify/tracks/summary/SpotifyTrackSummary';

export default function Spotify(props){
  const [user, setUser] = useState({})
  const [recentSongs, setRecentSongs] = useState([])

  async function onMount(){
    const user = await registerUser()
    setUser(user.data)
    const recentSongs = await getCurrentUserPlayback()
    setRecentSongs(recentSongs.data.items.map(item => item.track))
  }


  useEffect(() => onMount(), [])


  return  <div>
            <h1>Hello, {user.display_name}</h1>

            <SpotifyTrackSummary  tracks={recentSongs} />

            <SpotifyTrackList tracks={recentSongs}/>
          </div>;
}