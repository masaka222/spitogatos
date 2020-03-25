import React, { Component } from 'react';
import './Main2picture.css';
import woman from '../../assets/woman.png';

class Main2picture extends Component {
  render() {
    return (
      <div className="main2picture">
        <img src={woman} alt="womanPicture" id = "woman" />
      </div>
    );
  }
}

export default Main2picture;