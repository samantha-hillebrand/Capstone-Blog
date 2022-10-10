import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Main from './components/Main/Main'
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import ChangePassword from './components/ChangePassword/ChangePassword';
// need api for restaurants
function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirm: '',
    message: '',
    login: false,
    destination: []
  });
  const [blogPost, setBlogPost] = useState({
    username: "",
    blogName: "",
    content: ""
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route exact path='/register' element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route exact path='/main' element={<Main userInfo={userInfo} setUserInfo={setUserInfo} blogPost={blogPost} setBlogPost={setBlogPost} />} />
          <Route exact path='/change' element={<ChangePassword userInfo={userInfo} setUserInfo={setUserInfo} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
