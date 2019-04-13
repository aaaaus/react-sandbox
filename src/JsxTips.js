import React from 'react';

function getPlaceholderText() {
  return 'e.g. Homer Simpson'
}

function getTime() {
  return (new Date()).toLocaleTimeString()
}

const JsxTips = () => {

  //HOW JSX DIFFERS FROM HTML

  //see below for examples of how to inline style JSX (prob won't do this often honestly)

  //className must be used in JSX rather than class (however in newer versions of React this may change)

  //POWERFUL JSX INTERPOLATION: JSX can reference JS variables (strings, functions, etc)

  //JSX CANNOT render JS objects as text (ERROR: "Objects are not valid as a React child")

  const buttonText = 'Click me!';
  const labelText = 'Enter name:';

  const objectExample = { text: "D'oh!" }

  return (
    <div style={{ border: '1px solid green', padding: '10px'}}>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" placeholder={getPlaceholderText()} type="text" />
      <button style={{ backgroundColor: 'orange', color: 'black' }}>
        {buttonText}
      </button>
      <p>{objectExample.text}</p> {/* this WILL render only because we're explicitly referring to 'text' */}
      <span>
        The time at page load is: {getTime()}
      </span>
    </div>
  )

}

export default JsxTips;
