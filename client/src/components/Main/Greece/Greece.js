import React from 'react';
import image6 from '../../../assets/images/pexels-jimmy-teoh-1010657.jpg'
import '../Greece/Greece.css'

const Greece = () => {
  return (
    <div className='row margin'>
      <div className='col-sm-8'>
        <h2 id='title6'><b>Greece</b></h2>
        <h3 id='text6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
      </div>
      <div className='col-sm-4'>
        <img src={image6} id='img-6' alt='travel' />
      </div>
    </div>
  )
};
export default Greece;