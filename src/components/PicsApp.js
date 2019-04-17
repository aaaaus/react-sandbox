import React from 'react';
import axios from 'axios'; 

import PicsSearchBar from './PicsSearchBar';

class PicsApp extends React.Component {

  onSearchSubmit(term) {
    console.log("Search term is: ", term);
  }

  render() {

    return (
      <div className="ui container">
        <PicsSearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )

  }
}

export default PicsApp;
