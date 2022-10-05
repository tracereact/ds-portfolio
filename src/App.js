import React from 'react';
import './styles/global.css';
import styled from 'styled-components';
import Welcome from './components/welcome';
import Footer from './components/footer';

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
      <Footer />
    </StyledApp>
  );
};

export default App;
