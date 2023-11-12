import React from 'react';

import CommentRow from '../commentRow/commentRow.jsx';

import classes from './styles.module.css';

function Comments({comments}) {
  return (
    <>
      <div>
        {comments.map((comment) => (
          <CommentRow key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default Comments;
