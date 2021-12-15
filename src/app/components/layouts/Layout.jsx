import React from "react";
import styled from "styled-components";

const Layout = () => {
  return (
    <StyledBody>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledBody>
  );
};

export default Layout;

/* _________
  Styling
_________*/

const StyledBody = styled.body`
  display: grid;

  Header {
    background-color: hotpink;
  }

  Footer {
    background-color: lightgrey;
  }
`;
