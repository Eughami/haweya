import React, { Component } from 'react';

import ImageLetter from '../images/letter.jpg';
import NavBar from './Navbar';
class Letter extends Component {
  render() {
    return (
      <>
        <NavBar props={this.props} />
        <div className="letter__container">
          <img alt="" src={ImageLetter} />
        </div>
      </>
    );
  }
}

export default Letter;
