import React from 'react';

class SongSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: ''
    }
  }

  handleChange(event){
    const newIndex = event.target.value;
    this.setState({selectedIndex: newIndex})

    const selectedSong = this.props.songs[newIndex]
    this.props.selectSong(selectedSong);
  }


  render() {
    const options = this.props.songs.map((song, index) => {
      return <option value={index} key={index}>{song['im:name'].label}</option>
    })

    return (
      <select id="songs" value={this.state.selectedIndex} 
      onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    );
  }
}

export default SongSelector;