import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <StyledTest>
      <h1>hello world!</h1>
    </StyledTest>
  );
};

export default index;

/* _________
  Styling
_________*/

const StyledTest = styled.div`
  h1 {
    color: var(--color-bg-main);
  }
`;
