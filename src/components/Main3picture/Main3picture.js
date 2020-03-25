import React, { Component } from 'react';
import './Main3picture.css';
import cushion from '../../assets/cushion.png';

class Main3picture extends Component {
  render() {
    return (
      <div className="main3picture">
        <img src={cushion} alt="cushionPicture" id = "cushion" />
      </div>
    );
  }
}

export default Main3picture;