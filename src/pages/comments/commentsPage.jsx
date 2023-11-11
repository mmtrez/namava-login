import React, {useEffect, useState} from 'react';

import CommentField from '../../components/commentField/commentField.jsx';
import CommentLogin from '../../components/commentLogin/commentLogin.jsx';
import Comments from '../../components/comments/comments.jsx';
import NoComment from '../../components/noComment/noComment.jsx';
import {getComments} from '../../services/comments.js';

import classes from './styles.module.css';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  // ** Fns
  const fetchComments = async () => {
    const response = await getComments(page, 10, 140274);

    if (!response.succeeded) {
      return addToast(errorMessages[response.error.code]);
    }

    setComments((prev) => [...prev, ...response.result]);
  };

  // ** Effects
  useEffect(() => {
    fetchComments();
  }, [page]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>نظرات کاربران</h1>
      <CommentLogin />
      {comments.length ? <Comments /> : <NoComment />}
    </div>
  );
}

export default CommentsPage;
