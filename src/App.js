import React, { Component } from 'react';

import './App.css';

import JsxTips from './JsxTips';
// import SimpleComponentProps from './SimpleComponentProps';
import SeasonApp from './SeasonApp';
import Clock from './Clock';
import PicsApp from './components/PicsApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxTips />
        {/* <SimpleComponentProps /> */}
        <SeasonApp />
        <Clock />
        <PicsApp />
      </div>
    );
  }
}

export default App;
