import React from 'react'
import '../Florence/Florence.css'
import image1 from '../../../assets/images/pexels-pixabay-417344.jpg'

const Florence = () => {
  return (
    <div className='row margin'>
      <div className='col-sm-4'>
        <img src={image1} id='img-1' alt='travel' />
      </div>
      <div className='col-sm-8'>
        <h2 id='title1'><b>Italy</b></h2>
        <h3 id='text1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
      </div>
    </div>
  )
};
export default Florence;