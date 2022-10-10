import React, { useState } from 'react';
import ToggleComment from '../ToggleComment/ToggleComment'
import '../Dropdown/Dropdown.css'

const Dropdown = ({ getBlogs, _id, blogName, date, comments, comment, setComment }) => {
  const [display, setDisplay] = useState({
    isOpen: false
  });
  const handleToggle = () => {
    if (display.isOpen) {
      setDisplay({
        isOpen: false
      })
    } else {
      setDisplay({
        isOpen: true
      })
    }
  };
  if (display.isOpen) {
    return (
      <div key={_id} className='card text-center'>
        <div>
          <h4 id='location'>{blogName}</h4>
          <ul>
            {
              comments.map(({ username, date, comment }) => {
                let date1 = date.match(/\D{3}\s\D{3}\s\d{1,}\s\d{4}\s\d{2}:\d{2}:\d{2}/)
                let name = username.replace(username[0], username[0].toUpperCase())
                return (
                  <>
                    <div key={comment}>
                      <h3> {name} said {comment} on {date1}</h3>
                    </div>
                  </>
                );
              })
            }
          </ul>
          <ToggleComment
            getBlogs={getBlogs}
            _id={_id}
            comment={comment}
            setComment={setComment}
          />
          <a onClick={handleToggle} className='a'>Close</a>
        </div>
      </div>
    )
  } else {
    return (
      <div key={_id} className='d-inline-flex'>
        <a onClick={handleToggle} key={_id} id='spots' className='p-2 a'>{blogName}</a>
      </div>
    )
  }
};
export default Dropdown;