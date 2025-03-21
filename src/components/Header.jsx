import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <li>
        <Button />
      </li>
      <li>
        <Button />
      </li>
      <li>
        <Button />
      </li>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  column-gap: 6px;
`;

const Button = styled.button`
  all: unset;
  background-color: red;
  width: 12px;
  height: 12px;
  border-radius: 100%;
`;

export default Header;
