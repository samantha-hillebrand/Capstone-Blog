import React, { useEffect, useState } from 'react'
import '../Main/Main.css'
import Header from '../Header/Header'
import Video from '../Video/Video'
import 'bootstrap/dist/css/bootstrap.css'
import BlogPost from '../BlogPost/BlogPost'
import axios from 'axios'
import AllBlogs from '../AllBlogs/AllBlogs'
import Welcome from './Welcome/Welcome'
import Florence from './Florence/Florence'
import CapeCod from './CapeCod/CapeCod'
import Rome from './Rome/Rome'
import About from './About/About'
import Japan from './Japan/Japan'
import Venice from './Venice/Venice'
import Greece from './Greece/Greece'


const Main = ({ blogPost, setBlogPost }) => {
  const [blogList, setBlogList] = useState([])
  const [comment, setComment] = useState([])
  const getBlogs = async () => {
    const res = await axios('http://localhost:8800/getBlogs');
    setBlogList(res.data.sort((a, b) => a.blogName > b.blogName ? 1 : -1))
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div id='bg-color-main'>
      <Header />
      <Welcome />
      <Video />
      <div className='container'>
        <Florence />
        <CapeCod />
        <Rome />
        <About />
        <Japan />
        <Venice />
        <Greece />
      </div>
      <BlogPost
        blogPost={blogPost}
        setBlogPost={setBlogPost}
        getBlogs={getBlogs}
      />
      <AllBlogs
        blogList={blogList}
        setBlogList={setBlogList}
        comment={comment}
        setComment={setComment}
        getBlogs={getBlogs}
      />
    </div>
  )
};
export default Main;