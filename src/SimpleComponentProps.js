import React from 'react';

import Turtle from './Turtle'

//key tenets of components: Nesting, Reusability, Configuration

//props are JS objects ("props object") with key:value pairs

//JSX children of components ARE props, and come through as props.children

const SimpleComponentProps = () => {
  return (
    <div style={{border: '1px solid firebrick'}}>
      <Turtle color='blue' name='Leonardo' weapon='katana' />
      <Turtle color='red' name='Raphael' weapon='sai' />
      <Turtle color='orange' name='Michaelangelo' weapon='nunchucks' />
      <Turtle color='purple' name='Donatello' weapon='bo staff' />
    </div>
  )
}

export default SimpleComponentProps;
