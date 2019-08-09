import React, { Component } from 'react';

import './App.css';

import JsxTips from './JsxTips';
// import SimpleComponentProps from './SimpleComponentProps';
import SeasonApp from './SeasonApp';
import Clock from './Clock';
import PicsApp from './components/PicsApp';
import FoodCart from './FoodCart';
import FormBox from './FormBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsxTips />
        {/* <SimpleComponentProps /> */}
        <SeasonApp />
        <Clock />
        <PicsApp />
        <FoodCart />
        <FormBox />
      </div>
    );
  }
}

export default App;
