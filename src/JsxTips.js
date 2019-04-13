import React from 'react';

function getPlaceholderText() {
  return 'e.g. Homer Simpson'
}

const JsxTips = () => {

  //HOW JSX DIFFERS FROM HTML

  //see below for examples of how to inline style JSX

  //className must be used in JSX rather than class (however in newer versions of React this may change)

  //POWERFUL: JSX can reference JS variables

  const buttonText = 'Click me!';

  return (
    <div style={{ border: '1px solid green', padding: '10px'}}>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" placeholder={getPlaceholderText()} type="text" />
      <button style={{ backgroundColor: 'orange', color: 'black' }}>
        {buttonText}
      </button>
    </div>
  )

}

export default JsxTips;
