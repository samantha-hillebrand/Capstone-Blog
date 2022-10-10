import React from 'react';
import image2 from '../../../assets/images/pexels-anand-dandekar-1532771.jpg'
import '../CapeCod/CapeCod.css'

const CapeCod = () => {
  return (
    <div>
      <div className='row margin'>
        <div className='col-sm-8'>
          <h2 id='title2'><b>New England</b></h2>
          <h3 id='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h3>
        </div>
        <div className='col-sm-4'>
          <img src={image2} id='img-2' alt='travel' />
        </div>
      </div>
    </div>
  )
};
export default CapeCod;