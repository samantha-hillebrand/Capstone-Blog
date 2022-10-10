import React from 'react';
import '../Video/Video.css'

const Video = () => {
  return (
    <div>
      <video src='./video.mp4' id='video' autoPlay loop />
      <h1 id='video-title'>Over your everyday routine?</h1>
      <h1 id='logo'>Get Away Today</h1>
    </div>
  )
};
export default Video;