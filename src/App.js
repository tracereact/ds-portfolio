import React from 'react';
import './styles/global.css';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';

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
      <Header />
      <Body />
      <Footer />
    </StyledApp>
  );
};

export default App;
