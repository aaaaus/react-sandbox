import React from 'react';

import SeasonDisplay from './SeasonDisplay'

//STATE:
//only usable in class components
//is a JS object
//updating causes component (and any chlidren)  to re-render
//initialized when component created
//can only be updated using function 'setState'

//by extending React.Component, we are subclassing or borrowing functionality from that class


class SeasonApp extends React.Component {

  //good place to do one-time setup

  // constructor(props) {
  //   super(props);
  //
  //   //this is the ONLY time to do direct assignment to state (initialization)
  //   this.state = { lat: null, errorMessage: '' };
  //
  // }

  //alternate and more common state initialization
  state = { lat: null, errorMessage: '' };

  //good place to do data loading!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  semanticLoaderRender() {
    return (
      <div className="ui segment" style={{ height: "300px"}}>
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader">Loading!</div>
        </div>
      </div>
    )
  }

  //React requires us to define a render method
  //avoid doing anything beyond loading JSX
  render () {

      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
      }

      if (this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat}/>
      }

      return this.semanticLoaderRender()

  }
}

export default SeasonApp;
