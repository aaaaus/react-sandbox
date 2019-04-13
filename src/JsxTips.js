import React from 'react';

function getPlaceholderText() {
  return 'e.g. Homer Simpson'
}

const JsxTips = () => {

  //HOW JSX DIFFERS FROM HTML

  //see below for examples of how to inline style JSX (prob won't do this often honestly)

  //className must be used in JSX rather than class (however in newer versions of React this may change)

  //POWERFUL: JSX can reference JS variables (strings, functions, etc)

  //JSX CANNOT render objects as text (ERROR: "Objects are not valid as a React child")

  const buttonText = 'Click me!';
  const labelText = 'Enter name:';

  const objectExample = { text: "D'oh!" }

  return (
    <div style={{ border: '1px solid green', padding: '10px'}}>
      <label className="label" for="name">
        {labelText}
      </label>
      <input id="name" placeholder={getPlaceholderText()} type="text" />
      <button style={{ backgroundColor: 'orange', color: 'black' }}>
        {buttonText}
      </button>
      <p>{objectExample.text}</p> {/* this WILL render only because we're explicitly referring to 'text' */}
    </div>
  )

}

export default JsxTips;
