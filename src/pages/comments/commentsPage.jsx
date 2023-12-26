import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {Player} from '@lottiefiles/react-lottie-player';

import CommentField from '../../components/commentField/commentField.jsx';
import CommentLogin from '../../components/commentLogin/commentLogin.jsx';
import Comments from '../../components/comments/comments.jsx';
import NoComment from '../../components/noComment/noComment.jsx';
import {getComments} from '../../services/comments.js';

import classes from './styles.module.css';
import loadingLottie from '../../../public/assets/loading.json';

function CommentsPage({isLogedin}) {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // ** Fns
  const fetchComments = async () => {
    setLoading(true);
    const response = await getComments(page, 10, 140274);
    setLoading(false);

    if (!response.succeeded) {
      return addToast(errorMessages[response.error.code]);
    }

    setComments((prev) => [...prev, ...response.result]);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchComments();
  }, [page]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>نظرات کاربران</h1>
      {isLogedin ? <CommentField setComments={setComments} /> : <CommentLogin />}
      {comments.length ? (
        <>
          <Comments comments={comments} setPage={setPage} />
          <button className={classes.moreBtn} onClick={handleNextPage}>
            {loading ? (
              <Player
                className={classes.loadingSpinner}
                autoplay
                loop
                src={loadingLottie}
              ></Player>
            ) : (
              'بیشتر'
            )}
          </button>
        </>
      ) : (
        <NoComment />
      )}
    </div>
  );
}

export default CommentsPage;
