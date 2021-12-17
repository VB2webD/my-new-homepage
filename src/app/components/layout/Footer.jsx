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
  background-color: hotpink;
  p {
    margin: 0;
  }
`;
