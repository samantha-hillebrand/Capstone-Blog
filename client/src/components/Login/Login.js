import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../Login/Login.css'
import image from '../../assets/images/pexels-donald-tong-189296.jpg'

const Login = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/login', userInfo).then((response) => {
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate(response.data.redirectUrl, userInfo)
      } else {
        alert('Invalid Password!')
      }
    })
  };
  return (
    <div id='bg-color'>
      <img src={image} id='bg-img' alt='travel' />
      <h1 id='make'>Make your Dreams come true!</h1>
      <form id='padding'>
        <h2 id='login-title'><u>Login</u></h2>
        <input type='text' placeholder='Username' name='username' id='user-login' className='input' onChange={handleChange} />
        <br />
        <input type="password" placeholder="Password" name="password" id='user-psw' className='input' onChange={handleChange} />
        <br />
        <button type="submit" id="login" className='input' onClick={submitHandler}>Login</button>
        <br />
        <a href='/register' id='signup-link'>Register</a>
      </form>
    </div>
  )
};
export default Login;