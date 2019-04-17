import React from 'react';
import axios from 'axios';

import PicsSearchBar from './PicsSearchBar';
import PicsImageList from './PicsImageList';

class PicsApp extends React.Component {

  state = { images: [] }

  // async onSearchSubmit(term) { //rewrite this as arrow below to bind this, note that async keyword moves
  onSearchSubmit = async (term) => {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ef4e4ee42e39a1c2d0591cf45f6901ffbc5d8c2de19e625c0f1b1aa041d662fc'
      }
    })

    this.setState({ images: resp.data.results });
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
        <PicsImageList images={this.state.images} />
      </div>
    )

  }
}

export default PicsApp;
