import styled from "styled-components";

function Navbar() {
  return (
    <StyledNav>
      <StyledMenu>
        <a href="">
          <li>Resume</li>
        </a>
        <a href="">
          <li>Github</li>
        </a>
      </StyledMenu>
    </StyledNav>
  );
}

export default Navbar;
const StyledNav = styled.nav``;
const StyledMenu = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
  margin: 0;

  & > a {
    text-decoration: none;
    color: inherit;

    &:hover {
      font-weight: bold;
    }
  }
`;
