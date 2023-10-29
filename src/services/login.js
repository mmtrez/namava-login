import axios from 'axios';

const login = async (mail, password) => {
  try {
    const reqBody = {
      UserName: mail,
      Password: password,
    };
    const {data} = await axios.post(
      'https://www.namava.ir/api/v1.0/accounts/login/by-email',
      reqBody,
    );

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

export default login;
