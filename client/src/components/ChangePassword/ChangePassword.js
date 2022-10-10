import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import image from '../../assets/images/pexels-asad-photo-maldives-1268855.jpg'

const ChangePassword = ({ userInfo, setUserInfo }) => {
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
    console.log("click");
    e.preventDefault();
    if (userInfo.newpassword !== userInfo.confirm) {
      alert('The passwords do not match!')
    } else {
      // console.log('userInfo', userInfo);
      axios.post('http://localhost:8800/change', userInfo).then((response) => {
        // console.log(("res", response));
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate(response.data.redirectUrl, userInfo)
        } else {

          console.log(response.data);
        }
      })
    }
  };
  return (
    <div id='bg-color'>
      {/* <img src={image} id='bg-img' alt='travel' /> */}
      <form className='signup'>
        <h3 id="emp-signup"><u>Change Password</u></h3>
        <input type='text' name='username' placeholder='Username' onChange={handleChange} autoComplete='on' required />
        <br />
        <input type='password' name='password' placeholder="Old Password" onChange={handleChange} autoComplete='on' required />
        <br />
        <input type='password' name='newpassword' placeholder="New Password" onChange={handleChange} autoComplete='on' required />
        <br />
        <input type='password' name='confirm' placeholder=' Repeat New Password' onChange={handleChange} autoComplete='on' required />
        <br />
        <button type='submit' id='signup' value='Sign Up' className='btn' onClick={submitHandler}>Submit</button>
        <br />
        <a href='/' id='login-link'>Login</a>
      </form>
    </div>
  )
};
export default ChangePassword;