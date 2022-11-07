import makeRequest from './makeRequest';

const getGeorgiaData = () => {
  return makeRequest('/city', {
    country: 'USA',
    state: 'Georgia',
    city: 'Atlanta',
  });
};

export default getGeorgiaData;
