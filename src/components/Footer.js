import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  text-align: center;
  font-size: 0.875rem;
  padding: 1rem 0;
  background-color: lightgrey;
  opacity: 0.75;
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="copyright">Copyright &copy; Diamond Spratling</div>
      <div className="disclaimer">
        Website built by&nbsp;
        <span>
          <a href="https://tracereact.com" target="_blank" rel="noreferrer">
            Trace React
          </a>
        </span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
