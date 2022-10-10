import { useState } from 'react'
import FormComment from '../FormComment/FormComment'

const ToggleComment = ({ _id, comment, setComment, getBlogs }) => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const handleFormOpen = () => {
    setOpen({
      isOpen: true
    })
  };
  const handleFormClose = () => {
    setOpen({
      isOpen: false
    })
  };
  if (open.isOpen) {
    return (
      <FormComment
        _id={_id}
        setOpen={setOpen}
        onFormClose={handleFormClose}
        comment={comment}
        setComment={setComment}
        getBlogs={getBlogs}
      />
    )
  } else {
    return (
      <div className='toggleBlog'>
        <button className='btn btn-primary' onClick={handleFormOpen}>Add Comment</button>
      </div>
    )
  }
};
export default ToggleComment;