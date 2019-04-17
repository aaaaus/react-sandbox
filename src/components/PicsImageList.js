import React from 'react'

const PicsImageList = (props) => {

  //note: key is needed for React to efficiently update the DOM
  //note: if returning several elements, key must be at the root or top level element

  // const images = props.images.map(image => <img key={image.id} alt={image.description} src={image.urls.small} />)
  //destructured example
  const images = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.small} />)


  return (
    <div>{images}</div>
  )
}

export default PicsImageList;
