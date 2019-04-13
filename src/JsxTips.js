import React from 'react';

const JsxTips = () => {

  //see below for examples of how to inline style JSX

  return (
    <div style={{ border: '1px solid green', padding: '10px'}}>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'orange', color: 'black' }}>
        Submit
      </button>
    </div>

  )

}

export default JsxTips;
