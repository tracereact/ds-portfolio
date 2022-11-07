const makeRequest = async (
  req,
  params = {},
  options = {
    method: 'GET',
    redirect: 'follow',
  }
) => {
  try {
    const res = await fetch(
      `https://api.airvisual.com/v2${req}?key=${
        process.env.REACT_APP_IQAIR_API_KEY
      }&${new URLSearchParams(params)}`,
      options
    );

    if (res.ok) {
      return await res.json();
    }

    return console.error(`HTTP-Error: ${res.status}`);
  } catch (err) {
    console.error('Promise error: ', err);
    return Promise.reject(err ?? 'Promise rejection: Error');
  }
};

export default makeRequest;
