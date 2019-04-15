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

    this.state = { lat: null };
  }

  //React requires us to define a render method
  render () {

    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );


    return (
      <div>Latitude: </div>
    )
  }
}

export default SeasonApp;
