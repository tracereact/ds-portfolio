const formdata = new FormData();

const requestOptions = {
  method: 'GET',
  body: formdata,
  redirect: 'follow',
};

fetch(
  `http://api.airvisual.com/v2/countries?key=${process.env.REACT_APP_IQAIR_API_KEY}`,
  requestOptions
)
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    return console.log(result);
  })
  .catch((error) => {
    return console.log('error', error);
  });
