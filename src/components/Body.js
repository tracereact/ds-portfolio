import React from 'react';
import styled from 'styled-components';
import GeorgiaPollution from './GeorgiaPollution';

const StyledBody = styled.div`
  min-height: 100vh;
`;

const Body = () => {
  return (
    <StyledBody>
      <GeorgiaPollution />
    </StyledBody>
  );
};

export default Body;
