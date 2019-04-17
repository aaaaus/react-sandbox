import React from 'react';
import axios from 'axios';

import PicsSearchBar from './PicsSearchBar';

class PicsApp extends React.Component {

  async onSearchSubmit(term) {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ef4e4ee42e39a1c2d0591cf45f6901ffbc5d8c2de19e625c0f1b1aa041d662fc'
      }
    })

    console.log(resp.data.results);
  }

  //old way of resolving promise:

  // onSearchSubmit(term) {
  //
  //   axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       params: { query: term },
  //       headers: {
  //         Authorization: 'Client-ID ef4e4ee42e39a1c2d0591cf45f6901ffbc5d8c2de19e625c0f1b1aa041d662fc'
  //       }
  //     })
  //     .then((resp) => {
  //       console.log(resp.results.data);
  //     })
  // }

  render() {

    return (
      <div className="ui container">
        <PicsSearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )

  }
}

export default PicsApp;
