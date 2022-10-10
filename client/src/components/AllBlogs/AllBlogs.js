import React from 'react'
import '../AllBlogs/AllBlogs.css'
import Dropdown from '../Dropdown/Dropdown';

const AllBlogs = ({ blogList, comment, setComment, getBlogs }) => {
  return (
    blogList.map(({ _id, blogName, comments, username, date, content }, i) => {
      return (
        <Dropdown
          getBlogs={getBlogs}
          _id={_id}
          blogName={blogName}
          username={username}
          date={date}
          comments={comments}
          content={content}
          comment={comment}
          setComment={setComment}
          key={i}
        />
      )
    })
  )
};
export default AllBlogs;