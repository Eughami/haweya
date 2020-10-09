import React, { Component } from 'react';

import ImageLetter from '../images/letter.jpg'
class Letter extends Component {
  render() {
    return (
      <div className='letter__container'>
        <img alt='' src={ImageLetter} />
      </div>
    );
  }
}

export default Letter;