import styled from "styled-components";
import Card from "./Card";
import { portfolios } from "../mocks";
import Portal from "./Portal";
import useModal from "../hooks/useModal";
import Modal from "./Modal";

function Main() {
  const { modalStatus, toggle } = useModal();
  return (
    <StyledContainer>
      <StyledBanner></StyledBanner>
      {Object.keys(portfolios).map((key: "React" | "Three") => {
        return (
          <>
            <StyledHead>{key}</StyledHead>
            <StyledSection>
              {portfolios[key].map((item) => {
                return <Card toggle={toggle} portfolio={item} />;
              })}
            </StyledSection>
          </>
        );
      })}
      <Portal>
        {modalStatus.isOpen ? <Modal modalStatus={modalStatus} /> : null}
      </Portal>
    </StyledContainer>
  );
}

export default Main;

const StyledContainer = styled.div``;
const StyledBanner = styled.div``;
const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  height: 400px;
  margin: 0 10px;
  align-items: center;
`;
const StyledHead = styled.h1`
  text-align: center;
`;
