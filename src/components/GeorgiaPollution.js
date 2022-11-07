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

  return (
    <div>
      <ul>
        <li>Pollution {georgiaData.current.pollution}</li>
      </ul>
    </div>
  );
};

export default GeorgiaPollution;
