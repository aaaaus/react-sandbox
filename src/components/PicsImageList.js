import React from 'react';

import './PicsImageList.css';

import PicsImageCard from './PicsImageCard';

const PicsImageList = (props) => {

  //note: key is needed for React to efficiently update the DOM
  //note: if returning several elements, key must be at the root or top level element

  // const images = props.images.map(image => <img key={image.id} alt={image.description} src={image.urls.small} />)
  //destructured example
  //const images = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.small} />)

  //now, using new component for further customization:
  const images = props.images.map(image => <PicsImageCard key={image.id} image={image} />)

  return (
    <div className="pics-image-list">
      {images}
    </div>
  )
}

export default PicsImageList;
