import React from 'react';
import style from '../stats-card/SpotifyTrackStatsCard.module.css'
import mainStyle from "./SpotifyTrackSummary.module.css"

export default function SpotifyTrackSummary({tracks}){
  // refactor -> array of keys, instantiate with 0, loop over keys dynamically
  let trackAverages = {'acousticness': 0, 'danceability': 0, 'energy': 0, 'instrumentalness': 0, 'liveness': 0, 'loudness': 0, 'speechiness': 0, 'valence': 0}
  for (const track of tracks){
    trackAverages['acousticness'] += track['audio_analysis']['acousticness']
    trackAverages['danceability'] += track['audio_analysis']['danceability']
    trackAverages['energy'] += track['audio_analysis']['energy']
    trackAverages['instrumentalness'] += track['audio_analysis']['instrumentalness']
    trackAverages['liveness'] += track['audio_analysis']['liveness']
    trackAverages['loudness'] += track['audio_analysis']['loudness']
    trackAverages['speechiness'] += track['audio_analysis']['speechiness']
    trackAverages['valence'] += track['audio_analysis']['valence']
  }

  Object.keys(trackAverages).forEach(key => trackAverages[key] = (trackAverages[key]/tracks.length).toFixed(2))

  return <div>
            <h1> Summary of last {tracks.length} tracks</h1>

            <ul className={mainStyle.list}>
              <li className={trackAverages['acousticness'] > 0.5 ? style.positiveStat : style.negativeStat}>🪕 Acousticness: {trackAverages['acousticness']}</li>

              <li className={trackAverages['danceability'] > 0.5  ? style.positiveStat : style.negativeStat}>💃 Danceability: {trackAverages['danceability']}</li>

              <li className={trackAverages['energy'] > 0.5  ? style.positiveStat : style.negativeStat}>🔋 Energy: {trackAverages['energy']}</li>

              <li className={trackAverages['instrumentalness'] > 0.5  ? style.positiveStat : style.negativeStat}>🎼 Instrumentalness: {trackAverages['instrumentalness']}</li>

              <li className={trackAverages['liveness'] > 0.5  ? style.positiveStat : style.negativeStat}>🥳 Liveness: {trackAverages['liveness']}</li>

              <li className={trackAverages['loudness'] > 0.5  ? style.positiveStat : style.negativeStat}>🔊 Loudness: {trackAverages['loudness']}</li>

              <li className={trackAverages['speechiness'] > 0.5  ? style.positiveStat : style.negativeStat}>🗣 Speechiness: {trackAverages['speechiness']}</li>

              <li className={trackAverages['valence'] > 0.5  ? style.positiveStat : style.negativeStat}>🎭 Valence: {trackAverages['valence']}</li>
            </ul>
          </div>;
}