import { setError } from '../store/actions/handlersAction';

const axios = require('axios');

export const fetchMultipleLinks = (url, dispatch) => url.map(async (link) => {
  const result = await axios.get(link);

  if (result.status !== 200) {
    dispatch(setError(result.data.detail));
  }

  return result.data;
});
export const fetchOneLink = async (url) => {
  const result = await axios.get(url);

  const obj = {
    error: null,
    data: null,
  };

  if (result.status !== 200) {
    obj.error = result.data.detail;
  } else {
    obj.data = result.data;
  }

  return obj;
};
