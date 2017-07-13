const API_URL = 'https://www.reddit.com';

const defaultOptions = {
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const callApi = (url, options, success, failure) => {
  fetch(`${API_URL}/${url}`, { ...defaultOptions, ...options })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      const error = new Error(response.statusText);
      error.response = response;
      failure(error);
      throw error;
    })
    .then(success)
    .catch((error) => { console.log('request failed', error); });
};

export default callApi;
