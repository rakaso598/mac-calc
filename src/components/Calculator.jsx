import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Display from "./Display";
import Controls from "./Controls";

function Calculator() {
  return (
    <Container>
      <Header />
      <Display />
      <Controls />
    </Container>
  );
}

const Container = styled.main`
  width: 200px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 12px;
  padding: 16px;
  color: white;
`;

export default Calculator;
