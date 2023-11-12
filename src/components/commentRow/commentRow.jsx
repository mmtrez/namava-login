import React, {useState} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';

import {ChevdownIcon, HelpIcon} from '../icons/icons.jsx';
import formatDate from '../../utils/formatDate';

import classes from './styles.module.css';
import likeLottie from '../../../public/assets/likeActive.json';
import dislikeLottie from '../../../public/assets/dislikeActive.json';

function CommentRow({comment}) {
  const [commentData, setCommentData] = useState(comment);
  const [likeLottieRef, setLikeLottieRef] = useState(null);
  const [dislikeLottieRef, setDislikeLottieRef] = useState(null);

  const {
    flag,
    profileAvatar,
    profileCaption,
    body,
    createDateUTC,
    commentLikeDislike: {dislikeCount, likeCount},
  } = commentData;

  const handleLikeClicked = () => {
    if (likeLottieRef.currentFrame !== 0) {
      likeLottieRef.setDirection(-1);
    } else {
      likeLottieRef.setDirection(1);
    }
    likeLottieRef.play();
  };

  const handleDislikeClicked = () => {
    if (dislikeLottieRef.currentFrame !== 0) {
      dislikeLottieRef.setDirection(-1);
    } else {
      dislikeLottieRef.setDirection(1);
    }
    dislikeLottieRef.play();
  };

  const handleOpenSpoiled = () => {
    setCommentData((prev) => ({...prev, flag: 'None'}));
  };

  return (
    <div className={classes.card}>
      <div className={classes.firstRow}>
        <img src={`https://static.namava.ir${profileAvatar}`} alt="username" />
        <span>{profileCaption}</span>-<span>{formatDate(createDateUTC)}</span>
      </div>
      {flag === 'Spoiled' ? (
        <div className={classes.spoilerAlert} onClick={handleOpenSpoiled}>
          <HelpIcon className={classes.helpIcon} />
          <p>این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</p>
          <ChevdownIcon className={classes.chevIcon} />
        </div>
      ) : (
        <p className={classes.body}>{body}</p>
      )}
      <div className={classes.secondRow}>
        {flag !== 'Spoiled' && (
          <>
            <div>
              <span onClick={handleLikeClicked}>
                <Player
                  className={classes.icon}
                  src={likeLottie}
                  lottieRef={(ref) => setLikeLottieRef(ref)}
                  keepLastFrame
                ></Player>
              </span>
              <span className={classes.likeCount}>{likeCount}</span>
            </div>
            <div>
              <span onClick={handleDislikeClicked}>
                <Player
                  className={classes.icon}
                  src={dislikeLottie}
                  lottieRef={(ref) => setDislikeLottieRef(ref)}
                  keepLastFrame
                ></Player>
              </span>
              <span className={classes.likeCount}>{dislikeCount}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CommentRow;
