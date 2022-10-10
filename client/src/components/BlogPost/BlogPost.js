import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../BlogPost/BlogPost.css'

const BlogPost = ({ blogPost, setBlogPost, getBlogs }) => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem('user')).username;
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setBlogPost({
      ...blogPost,
      [name]: value
    })
  };
  const submitHandler = (e) => {
    blogPost.username = username
    e.preventDefault()
    axios.post('http://localhost:8800/createPost', blogPost).then((response) => {
      navigate(response.data.redirectUrl);
      getBlogs()
    })
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2 id='start-blog'>Where is your favorite spot to travel?</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <input type='text' className='form-control mt-3' placeholder='Favorite Place' name='blogName' onChange={handleChange} id='blog-title' />
          <input type='text' className='form-control mt-3' placeholder='username Title' name='username' value={username} onChange={handleChange} hidden />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' className='btn btn-primary blog-btn' onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  )
};
export default BlogPost;