import React from 'react'
import image3 from '../../../assets/images/rome1.jpg'
import '../Rome/Rome.css'

const Rome = () => {
  return (
    <div className='row margin'>
      <div className='col-sm-4'>
        <img src={image3} id='img-3' alt='travel' />
      </div>
      <div className='col-sm-8'>
        <h2 id='title3'><b>Rome</b></h2>
        <h3 id='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </h3>
      </div>
    </div>
  )
};
export default Rome;