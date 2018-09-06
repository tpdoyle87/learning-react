import React, { Component } from 'react';
import giphy from 'giphy-api'

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }

  search = (query) => {
    giphy("9J8x1QSfzKgl5SRINng9gnHrlOGtDh8j").search({
      q: query,
      limit: 10
    }, (error, results) => {
      this.setState({
        gifs: results.data
      })
    });
  }

  gifClicked = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
            <GifList gifs={this.state.gifs} selectGif={this.gifClicked} />
        </div>
      </div>

    );
  }
}

export default App;
