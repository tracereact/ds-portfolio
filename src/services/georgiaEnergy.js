import makeRequest from './makeRequest';

const getGeorgiaData = () => {
  const params = {
    country: 'USA',
    state: 'Georgia',
    city: 'Atlanta',
  };

  return makeRequest('/city', params);
};

export default getGeorgiaData;
