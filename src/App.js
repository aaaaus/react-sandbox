import React, { Component } from 'react';

import './App.css';

import JsxTips from './JsxTips';
import SimpleComponentProps from './SimpleComponentProps';
import SeasonApp from './SeasonApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxTips />
        <SimpleComponentProps />
        <SeasonApp />
      </div>
    );
  }
}

export default App;
