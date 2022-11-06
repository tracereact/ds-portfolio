import makeRequest from './makeRequest';

const getCountries = () => {
  return makeRequest('/countries');
};

export default getCountries;
