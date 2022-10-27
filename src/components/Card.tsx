import { useState } from "react";
import styled from "styled-components";
import { toggleType } from "../hooks/useModal";

interface Props {
  toggle: toggleType;
  portfolio: {
    id: number;
    title: string;
    link: string;
    gif: string;
    thumbnail: string;
    repoUrl?: string;
  };
}

function Card({ toggle, portfolio }: Props) {
  return (
    <StyledContainer
      onMouseDown={() => {
        document.getElementById("modal").style.display = "flex";
        toggle(portfolio.id);
      }}
    >
      <StyledTitle>{portfolio.title}</StyledTitle>
      <StyledImage src={portfolio.thumbnail} />
      <StyledButton>More</StyledButton>
    </StyledContainer>
  );
}
export default Card;

const StyledContainer = styled.div`
  position: relative;
  width: 305.5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center; // all the children
  border: 1px black solid;
  background-color: white;
  cursor: pointer;
  transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;
  &:hover {
    transform: translate(8px, -8px);
    box-shadow: -8px 8px 0 black;
  }
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledButton = styled.button`
  background-color: orange;
  border: 1px black solid;
  outline: none;
  width: 90%;
  padding: 10px 0;
  cursor: pointer;
`;
const StyledTitle = styled.h1`
  margin: 0;
`;
