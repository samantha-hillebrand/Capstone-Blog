import React from 'react';
import image5 from '../../../assets/images/pexels-david-bartus-586687.jpg'
import '../Venice/Venice.css'

const Venice = () => {
  return (
    <div className='row margin'>
      <div className='col-sm-4'>
        <img src={image5} id='img-5' alt='travel' />
      </div>
      <div className='col-sm-8'>
        <h2 id='title5'><b>Netherlands</b></h2>
        <h3 id='text5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
      </div>
    </div>
  )
};
export default Venice;