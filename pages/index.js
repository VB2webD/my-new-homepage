import React from "react";
import styled from "styled-components";
import Header from "../src/app/components/layout/Header";
import Footer from "../src/app/components/layout/Footer";

const index = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <div>
          <p>Placeholder</p>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default index;

/* _________
  Styling
_________*/

const StyledMain = styled.main`
  padding:0 1%;
  div {
    display: flex;
    flex-grow: 1;

    border: 1px solid black;
  }
`;
