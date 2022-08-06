import React from 'react';
import SpotifyTrackListItem from '../list-item/SpotifyTrackListItem';

export default function SpotifyTrackList({tracks}){
const listItems = tracks.map((track, idx) => <SpotifyTrackListItem key={idx} track={track} />)

  return <ul style={{display:'inline-block', padding: '0px'}}>
      {listItems}
    </ul>;
}