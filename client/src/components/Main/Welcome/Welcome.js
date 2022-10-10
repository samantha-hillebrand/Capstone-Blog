import React from 'react'
import '../Welcome/Welcome.css'
import 'bootstrap/dist/css/bootstrap.css'

const Welcome = () => {
  const username = JSON.parse(localStorage.getItem('user')).username;
  return (
    <h1 id='user-name' className='text-capitalize text-info' >Welcome {username}!</h1>
  )
};
export default Welcome;