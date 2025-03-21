import React from "react";
import Calculator from "./components/calculator";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
