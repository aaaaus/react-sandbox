import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import JsxTips from './JsxTips';
import SimpleComponentProps from './SimpleComponentProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxTips />
        <SimpleComponentProps />
      </div>
    );
  }
}

export default App;
