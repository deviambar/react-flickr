import React from 'react';
import Img from './Img';
import NotFound from './NotFound'

const ImgList = props => { 
  
  const results = props.data;
  let imgs;

  if (results.length) {
    imgs = results.map(img => {
      let id = img.id;
      let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
      return <Img className="size" url={`${path}`} key={id} />
    } );    
  } else {
    imgs = <NotFound />
  }

  return(
    <ul>
      {imgs}
    </ul>
  );
}

export default ImgList;

