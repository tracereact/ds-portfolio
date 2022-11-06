const formData = new FormData();

const makeRequest = (
  req,
  options = {
    method: 'GET',
    body: formData,
    redirect: 'follow',
  }
) => {
  fetch(
    `http://api.airvisual.com/v2/${req}?key=${process.env.REACT_APP_IQAIR_API_KEY}`,
    options
  )
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      return console.log(res);
    })
    .catch((err) => {
      return Promise.reject(err?.response?.data?.message ?? 'Error');
    });
};

export default makeRequest;
