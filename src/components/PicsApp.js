import React from 'react';

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
