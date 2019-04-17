import React from 'react';
import axios from 'axios';

import PicsSearchBar from './PicsSearchBar';
import PicsImageList from './PicsImageList';

const apiKey = process.env.REACT_APP_UNSPLASHED_API_KEY

class PicsApp extends React.Component {

  state = { images: [] }

  // async onSearchSubmit(term) { //rewrite this as arrow below to bind this, note that async keyword moves
  onSearchSubmit = async (term) => {
    debugger
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${apiKey}`
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
  //         Authorization: 'Client-ID ${apiKey}'
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
