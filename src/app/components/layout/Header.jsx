import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
};

export default Header;

/* _________
  Styling
_________*/

const StyledHeader = styled.header`
  background-color: lightgrey;

  h1 {
    margin: 0;
  }
`;
