import React from 'react';
import NavBar from './Navbar';

class Homepage extends React.Component {
  handleClick = (i) => {
    switch (i) {
      case 'first':
        this.props.history.push('/letter');
        break;
      case 'second':
        this.props.history.push('/images');
        break;
      case 'third':
        this.props.history.push('/video');
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <>
        <NavBar props={this.props} />
        <div className="Welcome__page__container">
          <div
            className="heart-shape"
            onClick={() => this.handleClick('first')}
            style={{ color: '#e76c6c' }}
          >
            Letter
          </div>
          <div
            className="heart-shape"
            onClick={() => this.handleClick('second')}
            style={{ color: '#e76c6c' }}
          >
            Images
          </div>
          <div
            className="heart-shape"
            onClick={() => this.handleClick('third')}
            style={{ color: '#e76c6c' }}
          >
            Video
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
