import React, { Component } from 'react';
import './Main3content.css';


class Main3content extends Component {
  render() {
    return (
      <div className="main3content">
        <div id = "main3content">
          <h3 className="mainContent__smallTitle">Since the 1500s</h3>
          <h2 className="mainContent__title">The standard</h2>
          <p className="mainContent__text main3content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='button'> Search </button>
        </div>
      </div>
    );
  }
}

export default Main3content;