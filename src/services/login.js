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
  }
};

export default login;
