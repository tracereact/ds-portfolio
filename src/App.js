import React from 'react';
import './styles/global.css';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import GeorgiaPollution from './components/GeorgiaPollution';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledApp className="App">
      <Welcome />
      Header goes here
      <GeorgiaPollution />
      <Footer />
    </StyledApp>
  );
};

export default App;
