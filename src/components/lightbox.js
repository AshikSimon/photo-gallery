import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import Gallery from "react-photo-gallery";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 

const imageRenderer = 
  ({photo}) => (
    <Image fileName="birds_1.jpg" alt="birds" />
  )

function MyComponent(props) {
  return <SRLWrapper> <Gallery photos={props.photos} renderImage={imageRenderer} margin={8}/> </SRLWrapper>
}

export default MyComponent;