import React from 'react';
import SongSelector from '../components/SongSelector';
import { SongDetail } from '../components/SongDetail';

class TopTwentyContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      focusSong: null
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open("GET", url)

    request.onload = () => {
      if(request.status !== 200) return

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);

      this.setState({songs: data.feed.entry, focusSong: data.feed.entry[0]})
    }

    request.send()
  }

  setFocusSong(song){
    this.setState({focusSong: song})
  }

  render(){
    return (
      <div>
        <h2>UK Top 20 songs</h2>
        <SongSelector songs={this.state.songs} selectSong={this.setFocusSong.bind(this)}/>
        <SongDetail song={this.state.focusSong} chartPosition={(this.state.songs.indexOf(this.state.focusSong)) + 1} />
      </div>
    );
  }
}

export default TopTwentyContainer;