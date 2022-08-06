import React from 'react';
import style from './SpotifyTrackStatsCard.module.css'

export default function SpotifyTrackStatsCard({track}){

  return <div className={style.card} style={{'backgroundImage': `url(${track['artists'][0]['images'][0]['url']})`}}>
          <div className={style.textArea}>
            <li>Artist genre: {track['artists'][0]['genres'].join(', ')} </li>

            <li>Album: {track['album']['name']} - {track['album']['release_date']}</li>

            <li className={track['audio_analysis']['acousticness'] > 0.5 ? style.positiveStat : style.negativeStat}>🪕 Acousticness: {track['audio_analysis']['acousticness']}</li>

            <li className={track['audio_analysis']['danceability'] > 0.5  ? style.positiveStat : style.negativeStat}>💃 Danceability: {track['audio_analysis']['danceability']}</li>

            <li className={track['audio_analysis']['energy'] > 0.5  ? style.positiveStat : style.negativeStat}>🔋 Energy: {track['audio_analysis']['energy']}</li>

            <li className={track['audio_analysis']['instrumentalness'] > 0.5  ? style.positiveStat : style.negativeStat}>🎼 Instrumentalness: {track['audio_analysis']['instrumentalness']}</li>

            <li className={track['audio_analysis']['liveness'] > 0.5  ? style.positiveStat : style.negativeStat}>🥳 Liveness: {track['audio_analysis']['liveness']}</li>

            <li className={track['audio_analysis']['loudness'] > 0.5  ? style.positiveStat : style.negativeStat}>🔊 Loudness: {track['audio_analysis']['loudness']}</li>

            <li className={track['audio_analysis']['speechiness'] > 0.5  ? style.positiveStat : style.negativeStat}>🗣 Speechiness: {track['audio_analysis']['speechiness']}</li>

            <li className={track['audio_analysis']['valence'] > 0.5  ? style.positiveStat : style.negativeStat}>🎭 Valence: {track['audio_analysis']['valence']}</li>
          </div>
        </div>;
}