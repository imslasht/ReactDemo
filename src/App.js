import React from 'react';
import axios from 'axios';
import './App.css';
import ColorPalete from './ColorPalete';

import  TrackList from './TrackList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      cars:[],
      currentTrack: {},
    }

    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/tracks';
    const carsUrl = 'http://localhost:4000/cars';

    axios.get(url)
      .then((Response) => {
        this.setState({
          tracks: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get(carsUrl)
      .then((Response) => {
        this.setState({
          cars: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrentTrack(item) {
    this.setState({
      currentTrack: item,
    })
  }
  render(){

  return (
    <div className="App">
      <TrackList tracks={this.state.tracks} cars={this.state.cars}/>
     {/*<ColorPalete/>*/}
    </div>
  );
}
}

export default App;
