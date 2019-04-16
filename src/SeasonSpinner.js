import React from 'react';

const SeasonSpinner = (props) => {
  return (
    <div className="ui segment" style={{ height: "300px"}}>
      <p></p>
      <div className="ui active dimmer">
        <div className="ui loader">{props.message}</div>
      </div>
    </div>
  )
}

//default props can be defined in the following manner, good practice for reusable components

SeasonSpinner.defaultProps = {
  message: "Loading!"
}

export default SeasonSpinner;
