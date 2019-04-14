import React from 'react';

const Turtle = (props) => {

  return (
    <div style={{backgroundColor: props.color}}>
      <span>Name: {props.name}</span><br />
      <span>Weapon: {props.weapon}</span>
    </div>
  )
}

export default Turtle;
