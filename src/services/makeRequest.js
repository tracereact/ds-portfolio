const formData = new FormData();

const makeRequest = (
  req,
  params = {},
  options = {
    method: 'GET',
    body: formData,
    redirect: 'follow',
  }
) => {
  fetch(
    `https://api.airvisual.com/v2${req}${new URLSearchParams(params)}`,
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
