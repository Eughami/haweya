import React, { Component } from 'react';
import NavBar from './Navbar';

class BooVideo extends Component {
  render() {
    return (
      <>
        <NavBar props={this.props} />
        <div className="video__page__container">
          <span className="video__page__message">
            There was suppose to be a video here But i coudln't complete it in
            time Sorry Babe and wish you a wonderful Day
            <br />
            Your ever loving Mamou ❤️
          </span>
        </div>
      </>
    );
  }
}

export default BooVideo;
