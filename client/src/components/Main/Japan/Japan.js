import React from 'react'
import image4 from '../../../assets/images/pexels-belle-co-402028.jpg'
import '../Japan/Japan.css'

const Japan = () => {
  return (
    <div className='row margin'>
      <div className='col-sm-8'>
        <h2 id='title4'><b>Japan</b></h2>
        <h3 id='text4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
      </div>
      <div className='col-sm-4'>
        <img src={image4} id='img-4' alt='travel' />
      </div>
    </div>
  )
};
export default Japan;