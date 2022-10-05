import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  padding: 1rem 0;
  background-color: lightgrey;
  opacity: 0.75;
`;

const Footer = () => {
  const scrollUp = () => {
    document.getElementById('page-top').scrollIntoView(true);
  };

  return (
    <StyledDiv className="footer">
      Copyright &copy; Girl + Environment 2022
    </StyledDiv>
  );
};

export default Footer;
