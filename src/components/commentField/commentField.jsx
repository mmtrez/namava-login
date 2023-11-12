import React, {useState, useRef} from 'react';
import cx from 'classnames';
import {Player} from '@lottiefiles/react-lottie-player';

import {SendCircleIcon} from '../icons/icons.jsx';

import classes from './styles.module.css';
import loadingLottie from '../../../public/assets/turningLottie.json';
import sentLottie from '../../../public/assets/sentLottie.json';
import checkBoxLottie from '../../../public/assets/checkboxLottie.json';

function CommentField({setComments}) {
  const [commentBody, setCommentBody] = useState('');
  const [status, setStatus] = useState('idle');
  const [spoiled, setSpoiled] = useState(false);
  const [checkbox, setCheckbox] = useState(null);

  const handleChange = (e) => setCommentBody(e.target.value);

  const handleAnimationEnd = (e) => {
    if (e === 'complete') {
      setCommentBody('');
      setSpoiled(false);
      setStatus('idle');
    }
  };

  const handleCheckBoxActions = () => {
    if (checkbox.currentFrame !== 0) {
      checkbox.setDirection(-1);
    } else {
      checkbox.setDirection(1);
    }
    checkbox.play();
    setSpoiled((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock add new comment
    const newComment = {
      flag: spoiled ? 'Spoiled' : 'None',
      body: commentBody,
      profileAvatar: '/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png',
      profileCaption: 'Mohammadreza',
      createDateUTC: '20231112T48912984Z',
      commentLikeDislike: {dislikeCount: 0, likeCount: 0},
      id: Math.floor(Math.random() * 1000),
    };
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      setComments((prev) => [newComment, ...prev]);
    }, 4000);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.firstRow}>
        <img
          src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png"
          alt="username"
          className={classes.userProfile}
        />
        <input
          className={classes.textField}
          type="text"
          placeholder="نظرتان درباره این فیلم چیست؟"
          value={commentBody}
          onChange={handleChange}
          disabled={status !== 'idle'}
        />
        <button
          type="submit"
          className={classes.formBtn}
          disabled={commentBody.length === 0 || status !== 'idle'}
        >
          {status === 'idle' && (
            <SendCircleIcon
              className={cx(classes.sendIcon, {[classes.active]: commentBody.length})}
            />
          )}
          {status === 'loading' && <Player autoplay loop src={loadingLottie}></Player>}
          {status === 'sent' && (
            <Player autoplay src={sentLottie} onEvent={handleAnimationEnd}></Player>
          )}
        </button>
      </div>
      <div className={classes.secondRow} onClick={handleCheckBoxActions}>
        <div className={classes.checkboxWrapper}>
          <Player
            src={checkBoxLottie}
            lottieRef={(ref) => setCheckbox(ref)}
            speed={2}
            keepLastFrame
          ></Player>
        </div>
        <p>این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</p>
      </div>
    </form>
  );
}

export default CommentField;
