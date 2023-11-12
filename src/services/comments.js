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

export {getComments};
