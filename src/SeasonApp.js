import React from 'react';

import SeasonDisplay from './SeasonDisplay'

//STATE:
//only usable in class components
//is a JS object
//updating causes component to re-render
//initialized when component created
//can only be updated using function 'setState'

//by extending React.Component, we are subclassing or borrowing functionality from that class


class SeasonApp extends React.Component {
  constructor(props) {
    super(props);

    //this is the ONLY time to do direct assignment to state (initialization)
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  //React requires us to define a render method
  render () {

    return (
      <div>
        Latitude: {this.state.lat}
        Error: {this.state.errorMessage}
      </div>

    )
  }
}

export default SeasonApp;
