import { useEffect, useState } from "react";
import styled from "styled-components";
import { modalStatusType } from "../hooks/useModal";
import { portfolios } from "../mocks";

interface Props {
  modalStatus: modalStatusType;
}

function Modal({ modalStatus }: Props) {
  let [react, three] = Object.values(portfolios);
  let portfolioArr = [...react, ...three];
  let portfolio = portfolioArr.find((item) => item.id === modalStatus.id);
  return (
    <StyledContainer id="modal-container">
      <StyledWrapper
        onMouseDown={(e) => {
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <StyledTitle>{portfolio.title}</StyledTitle>
        <StyledThumbnail src={portfolio.gif} />
        <StyledList>
          <a href={portfolio.link} target="_blank">
            Link
          </a>
          <a href={portfolio.repoUrl} target="_blank">
            Github
          </a>
        </StyledList>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Modal;

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  text-align: center;
  font-family: "Roboto Mono", monospace; ;
`;
const StyledWrapper = styled.div`
  position: fixed;
  width: 50%;
  height: 700px;
  background-color: white;
  border: 1px solid black;
`;
const StyledTitle = styled.h1``;
const StyledThumbnail = styled.img`
  width: 100%;
`;
const StyledList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  & > a:hover {
    font-weight: bold;
  }
`;
