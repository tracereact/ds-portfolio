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
      `https://api.airvisual.com/v2${req}?${new URLSearchParams(params)}`,
      options
    );
    return res.json();
  } catch (err) {
    console.error('Promise error: ', err);
    return Promise.reject(err ?? 'Promise rejection: Error');
  }
};

export default makeRequest;
