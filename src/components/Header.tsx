import styled from "styled-components";
import Navbar from "./Navbar";

function Header() {
  return (
    <StyledHeader id="header">
      <StyledLogo>Nearworld</StyledLogo>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff0e5;
  transition: all 200ms ease;
`;
const StyledLogo = styled.div``;
