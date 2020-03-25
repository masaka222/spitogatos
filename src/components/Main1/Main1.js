import React from 'react';
import './Main1.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class Main1 extends React.Component {
  render(){
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 3000,
      }
    }
    return (
      <div className='carousel'>
        <Swiper {...params}>
          <div>
            <div className='page page-one'>     
              <div className='page-text'>
                <h1 className='mainTitle'>S.und Co</h1>
                <div className='titleBorder'></div>
                <p className='paragraph'> 
                  To take a trivial example, which of us ever undertakes laborious
                  physical exercise, except to obtain some advantage from it?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='page page-two'>     
              <div className='page-text'>
                <h1 className='mainTitle'>Title 2</h1>
                <div className='titleBorder'></div>
                <p className='paragraph'> 
                  To take a trivial example, which of us ever undertakes laborious
                  physical exercise, except to obtain some advantage from it?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='page page-three'>     
              <div className='page-text'>
                <h1 className='mainTitle'>Title 3</h1>
                <div className='titleBorder'></div>
                <p className='paragraph'> 
                  To take a trivial example, which of us ever undertakes laborious
                  physical exercise, except to obtain some advantage from it?
                </p>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Main1;