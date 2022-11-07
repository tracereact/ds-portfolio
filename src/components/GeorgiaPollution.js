import React from 'react';
import { useAsync } from '../hooks/useAsync';
import getGeorgiaData from '../services/georgiaEnergy';

const GeorgiaPollution = () => {
  const { loading, error, value: georgiaData } = useAsync(getGeorgiaData);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(`Georgia Data: ${JSON.stringify(georgiaData)}`);

  return (
    <div>
      <ul>
        <li>aqicn: {georgiaData?.data?.current?.pollution?.aqicn}</li>
      </ul>
    </div>
  );
};

export default GeorgiaPollution;
