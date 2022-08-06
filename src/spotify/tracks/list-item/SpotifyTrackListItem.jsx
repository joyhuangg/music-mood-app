import React, {useState} from 'react';
import style from './SpotifyTrackListItem.module.css'
import SpotifyTrackStatsCard from "../stats-card/SpotifyTrackStatsCard.jsx"

export default function SpotifyTrackListItem({track}){
  const artist = track['artists'][0]
  const album = track['album']
  const coverPhoto = album ? album['images'][2]['url'] : ''
  const altName = album ? album['name'] : artist['name']
  const [showStats, setShowStats] = useState(false)


  return <li className={style.listItem} onMouseEnter={() => setShowStats(true)} onMouseLeave={() => setShowStats(false)}>
              <div>
                <img src={coverPhoto} alt={altName} style={{borderRadius: '4px', marginRight: '4px'}}/>
              </div>

              <div>
                <h1>
                    {track["artists"][0]["name"]} - {track["name"]}
                </h1>
              </div>
            {
              showStats ? <SpotifyTrackStatsCard track={track} />  :  null
            }
            </li>;
}