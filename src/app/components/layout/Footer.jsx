import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
};

export default Footer;

/* _________
  Styling
_________*/

const StyledFooter = styled.footer`
  background-color: var(--color-bg-footer);
  width: 100vw;

  p {
    margin: 0;
    color: var(--color-font-headlines);
  }
`;
