import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../images/cuet2.jpg'
import image2 from '../images/cute1.jpg'
import image3 from '../images/cute2.jpg'
import image4 from '../images/favorite.jpg'
import image5 from '../images/favorite1.jpg'
import image6 from '../images/kawai.jpg'
import image7 from '../images/loginBackground1.jpg'
import image8 from '../images/mainBackground1.jpg'
import image9 from '../images/nice.jpg'
import image10 from '../images/owwwww.jpg'
class BooImges extends Component {
  render() {
    return (
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls={true}>
          <img src={image1} className="sliderimg"/>
          <img src={image2} className="sliderimg"/>
          <img src={image3} className="sliderimg"/>
          <img src={image4} className="sliderimg"/>
          <img src={image5} className="sliderimg"/>
          <img src={image6} className="sliderimg"/>
          <img src={image7} className="sliderimg"/>
          <img src={image8} className="sliderimg"/>
          <img src={image9} className="sliderimg"/>
          <img src={image10} className="sliderimg"/>
      </AliceCarousel>
      </div>
    );
  }
}

export default BooImges;