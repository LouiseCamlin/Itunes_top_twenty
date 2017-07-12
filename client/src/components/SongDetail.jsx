import React from 'react';

export const SongDetail = (props) => {

  if (!props.song) return null


  return (
    <div id="song-detail">
      <ul>

        
        <img src={props.song["im:image"][2].label}/>
        
        <li>
          Chart Postion: {props.chartPosition}
        </li>
        <li>
          Artist: {props.song["im:artist"].label}
        </li>
        <li>
          Title: {props.song['im:name'].label}
        </li>
        <li>
          <audio controls>
            <source src={props.song.link[1].attributes.href} type="audio/wav"/>
            Your browser does not support the audio element.
          </audio>
        </li>

      </ul>
    </div>
  )


}

