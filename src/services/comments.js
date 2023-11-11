import axios from 'axios';

const getComments = async (page, count = 10, mediaId) => {
  try {
    const params = {
      pi: page,
      count,
      mediaId,
    };
    const {data} = await axios.get('https://www.namava.ir/api/v1.0/comments', {params});
    return data;
  } catch (err) {
    console.log(err);
  }
};

const postComment = async (mediaId, rawBody) => {
  try {
    const reqBody = {
      flag: 0,
      mediaType: 'Series',
      mediaId,
      rawBody,
    };
    const {data} = await axios.post('https://www.namava.ir/api/v1.0/comments', reqBody, {
      withCredentials: true,
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${cookies}`,
        // Cookie: `auth_v2=${cookies}`,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);

    if (err?.response?.status === 429) {
      return {
        succeeded: false,
        error: {
          code: 429,
          message: err.message,
        },
      };
    }
  }
};

export {getComments, postComment};
