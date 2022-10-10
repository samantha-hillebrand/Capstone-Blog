import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormComment = ({ _id, setOpen, comment, setComment, getBlogs }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setComment({
      ...comment,
      [name]: value
    })
  };
  const axiosHandler = (e) => {
    comment.username = JSON.parse(localStorage.getItem('user')).username;
    comment.blogId = _id;
    e.preventDefault()
    axios.post('http://localhost:8800/createComment', comment).then((response) => {
      document.getElementById("comment").value = ""
      setOpen({
        isOpen: false
      });
      getBlogs();
      navigate(response.data.redirectUrl);
    })
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <textarea type='textarea' size='auto' wrap='soft' name='comment' placeholder='Comments' id='comment' onChange={handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' className='btn btn-primary' onClick={axiosHandler}>Submit</button>
        </div>
      </div>
    </div>
  )
};
export default FormComment;