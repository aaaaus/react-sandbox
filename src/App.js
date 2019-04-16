import React, { Component } from 'react';

import './App.css';

import JsxTips from './JsxTips';
import SimpleComponentProps from './SimpleComponentProps';
import SeasonApp from './SeasonApp';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxTips />
        {/* <SimpleComponentProps /> */}
        <SeasonApp />
        <Clock />
      </div>
    );
  }
}

export default App;
