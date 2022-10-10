import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const DeleteUser = () => {
  const navigate = useNavigate();
  const deleteHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/delete', JSON.parse(localStorage.getItem('user'))).then((response) => {
      console.log(localStorage.getItem('user'));
      localStorage.setItem('user', null);
      navigate(response.data.redirectUrl)
    })
  };
  return (
    <div>
      <a className="nav-link" onClick={deleteHandler} href='#'>Delete User</a>
    </div>
  )
};
export default DeleteUser;